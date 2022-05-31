import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentScreen({ route, navigation }) {
  const { totalPrice } = route.params;

  return (
    <SafeAreaView>
      <Button title="Atras" onPress={() => navigation.goBack()} color="#FB7785"/>
      <View style={style.container}>
        <Image
          style={style.cardImage}
          source={require("../../assets/creditCard.png")}
        />
        <Text>Numero Tarjeta</Text>
        <TextInput placeholder="xxxx-xxxx-xxxx-xxxx" />
        <Text>Titular</Text>
        <TextInput placeholder="Nombre Titular" />
        <Text>Fecha Vencimiento</Text>
        <TextInput placeholder="Fecha Vencimiento" />
        <Text>CCV</Text>
        <TextInput placeholder="CCV" />

        <Pressable style= {style.boton}
          onPress={() =>
            navigation.navigate("CheckOut", { totalPrice: totalPrice })
          }
        >
          <Text style={{color: "white"}}>PAGAR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  cardImage: {
    width: "80%",
    height: 180,
    resizeMode: "contain",
  },
  boton:{
    backgroundColor: '#3D9970',
    borderRadius: 5,
    height:50,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
