import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CheckOutScreen({ route, navigation }) {
    const { totalPrice } = route.params;

    console.log(totalPrice);
  return (
    <View>
      <Button title="Atras" onPress={() => navigation.goBack()} />

    
    <SafeAreaView style={styles.appBackground}>
      <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
      <Image
        source={require("../../assets/GifMuestra2.gif")}
        style={styles.video}
        resizeMode="cover"
      ></Image>
        <Text style={styles.tittle}>¡TODO LISTO, CRACK!</Text>

        <View style={styles.block}>
            <Text style={styles.subtittle}>¡Te esperamos!</Text>
            <Text style={styles.text}>
              Haz realizado con éxito la compra de tus boletas, no olvides que el evento es el día
              <Text style={{ fontWeight: "bold" }}> 31 de Mayo del 2022</Text> a
              las <Text style={{ fontWeight: "bold" }}>6:00PM</Text> en el 
              <Text style={{ fontWeight: "bold" }}> Autocine PiedraGrande </Text>
            </Text>
          </View>
        <Image source={require('../../assets/Van.png')}></Image>
      <Text>CheckOutScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#06021B",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  img: {
    height: "30%",
    width: ""
  },
  tittle: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    padding: 40,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  subtittle: {
    fontSize: 35,
    textAlign: "left",
    color: "white",
    padding: 10,
    fontWeight: "400",
  },
  text: {
    fontSize: 20,
    textAlign: "left",
    color: "white",
    fontWeight: "200",
    paddingBottom: 20,
  },
  block: {
    backgroundColor: "rgba(48,43,79,0.7)",
    borderRadius: 50,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    marginVertical: 10,
  },
});