import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";

export default function CartScreen(props) {
  const {navigation} = props;
  const [values, setValues] = useState(ticketsInputValues);

  const total = Object.keys(values)
    .map(calTotal)
    .reduce((prev, next) => prev + next) ?? 0;

  function calTotal(key) {
    return tickectsPrice[key] * values[key];
  }

  return (
    <View style={styles.bgColor}>
      <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
    <SafeAreaView styles={styles.safeContainer}>

      <Pressable style={styles.button} onPress= {()=>{navigation.navigate('Payment',{totalPrice : total})}} >
        <Text>Boton</Text>
      </Pressable>

      <Text style={styles.title}>Boletería</Text>
      <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/autocine.png')} />
      </View>
      <CartItem
        ticketName="Platino 1"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}        
      />
      <CartItem
        ticketName="Platino 2"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Oro 1"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Oro 2"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Diamante 1"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Diamante 2"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Vip 1"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="Vip 2"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="General"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <Text>Total = {total}</Text>
    </SafeAreaView>
    </View>
  );
}

const ticketsInputValues = {
  Platino1: 0,
  Platino2: 0,
  Oro1: 0,
  Oro2: 0,
  Diamante1: 0,
  Diamante2: 0,
  vip1: 0,
  vip2: 0,
  General: 0,
};

const tickectsPrice = {
  Platino1: 500000,
  Platino2: 450000,
  Oro1: 400000,
  Oro2: 350000,
  Diamante1: 300000,
  Diamante2: 250000,
  vip1: 200000,
  vip2: 150000,
  General: 100000,
};

const styles = StyleSheet.create({
  bgColor: {
    borderRadius: 10,
    padding:5,
    backgroundColor: "rgba(48,43,79,0.8)",
    backdropFilter: "blur(6px)",
    mixBlendMode: "normal",
  },
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop:10,
    backgroundColor: "rgba(48,43,79,0.8)",
    height: 50,
    width:50,
    borderRadius:10,
    left:350,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: "white",
    fontWeight: "bold",
    marginBottom:20,
  },
  container: {
    marginTop:80,
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:30,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius:30,
  },
  
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1
  },
});