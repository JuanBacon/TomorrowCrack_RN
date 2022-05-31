import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

SafeAreaView;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.appBackground}>
      <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
      <Image
        source={require("../../assets/GifMuestra.gif")}
        style={styles.video}
        resizeMode="cover"
      ></Image>
      <Text style={styles.tittle}>TOMORROWCRACK'S</Text>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View style={styles.block}>
            <Text style={styles.subtittle}>¿De qué trata?</Text>
            <Text style={styles.text}>
              Este es el evento más importante del país, donde se reúnen los más
              cracks de la música y tomarse el gran escenario y hacer de tu
              noche una de las mejores.
              <Text style={{ fontWeight: "bold" }}>
                ¡Este año se celebra la edición 2022 del festival!
              </Text>
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.subtittle}>Fecha, Hora y Lugar</Text>
            <Text style={styles.text}>
              Esta edición del TomorrowCrack's Festival llegará a Cali el día{" "}
              <Text style={{ fontWeight: "bold" }}>31 de Mayo del 2022</Text> a
              las <Text style={{ fontWeight: "bold" }}>6:00PM</Text> en el
              Autocine PiedraGrande
            </Text>
            <Image
              source={require("../../assets/place.png")}
              resizeMode="cover"
              style={styles.placeImg}
            ></Image>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#06021B",
    height: "100%",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1,
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
  placeImg: {
    height: "32%",
    width: "100%",
    margin: 0
  },
});
