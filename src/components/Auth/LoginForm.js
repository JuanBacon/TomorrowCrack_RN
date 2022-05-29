import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import { user } from "../../utils/userDB";

export default function LoginForm(props) {
  
  const {navigation} = props
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        setError("el usuario o contraseña son incorrectas");
      } else {
        navigation.navigate("Navigation");
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Nombre de Usuario"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />

      <TextInput
        placeholder="contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />

      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}> {formik.errors.username}</Text>
      <Text style={styles.error}> {formik.errors.password}</Text>
      <Text style={styles.error}> {error}</Text>
    </View>
  );
}

function initialValue() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El Usuario es Obligatorio"),
    password: Yup.string().required("La contraseña debe ser obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
