import { View, Text, StyleSheet, TextInput, Button, StatusBar, Image, Pressable  } from "react-native";
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
    <View style={styles.appBackground}>
      <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
      <Image source={require('../../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>

      <View style={styles.block} >
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de Usuario"
        placeholderTextColor={"#A7B0C0"}
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={"#A7B0C0"}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.textButton}> Acceder </Text>
      </Pressable>

      <Text style={styles.error}> {formik.errors.username}</Text>
      <Text style={styles.error}> {formik.errors.password}</Text>
      <Text style={styles.error}> {error}</Text>
      </View>
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
    username: Yup.string().required("El Usuario es obligatorio"),
    password: Yup.string().required("La Contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#06021B",
    height: "100%", 
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    color: "white"
  },
  input: {
    height: 50,
    width:327,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white"
    
  },
  button: {
    margin: 12,
    height: 56,
    width: 327,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 31,
    paddingRight: 31,
    borderRadius: 8,
    backgroundColor: "rgba(106,103,244,1)",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.3,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1
  },
  block: {
    backgroundColor: "rgba(48,43,79,0.7)",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    display: "flex",
    alignItems:"center",
    paddingLeft: 44,
    paddingRight: 44
    
  },
  error: {
    textAlign: "center",
    color: "#FB7785",
    marginTop: 20,
  },
});
