import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckOutScreen({ route, navigation }) {
  const { totalPrice } = route.params;

  console.log(totalPrice);
  return (
    <SafeAreaView>
      <Button title="Atras" onPress={() => navigation.goBack()} />
      <View style={style.container}>
        <Image
          style={style.cardImage}
          source={require("../../assets/creditCard.png")}
        />
        <Text>Numero Tarjeta</Text>
        <TextInput placeholder="xxxx-xxxx-xxxx-xxxx" />
        <Text>Titular</Text>
        <TextInput placeholder="Nombre Titular" />
        <Text>CCV</Text>
        <TextInput placeholder="CCV" />
        <Text>TOTAL: {totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  cardImage: {
    width: "80%",
    height: 180,
    resizeMode: "contain",
  },
});
