import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";
import { ScrollView } from "react-native-gesture-handler";

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

      <View style={{flexDirection: "row",justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10}}>
      <Text style={{color: "white"}}>Total : {total} COP</Text>
      <Pressable style={styles.button} onPress= {()=>{navigation.navigate('Payment',{totalPrice : total})}} >
        <Text style={{color: "white"}}>Pagar</Text>
      </Pressable>
      </View>

      <Text style={styles.title}>Boletería</Text>
      <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/autocine.png')} />
      </View>
      <ScrollView style={{marginBottom: 400}}>
        <CartItem
          ticketName= {Object.keys(tickectsPrice)[0]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}        
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[1]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[2]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[3]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[4]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[5]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[6]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[7]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
        <CartItem
          ticketName={Object.keys(tickectsPrice)[8]}
          price={tickectsPrice}
          changeValue={(ticketCount) => setValues(ticketCount)}
          ticketObj={values}
        />
      </ScrollView>
      
    </SafeAreaView>
    </View>
  );
}

const ticketsInputValues = {
  "Platino 1": 0,
  "Platino 2": 0,
  "Oro 1": 0,
  "Oro 2": 0,
  "Diamante 1": 0,
  "Diamante 2": 0,
  "Vip 1": 0,
  "Vip 2": 0,
  "General": 0,
};

const tickectsPrice = {
  "Platino 1": 500000,
  "Platino 2": 450000,
  "Oro 1": 400000,
  "Oro 2": 350000,
  "Diamante 1": 300000,
  "Diamante 2": 250000,
  "Vip 1": 200000,
  "Vip 2": 150000,
  "General": 100000,
};

const styles = StyleSheet.create({
  bgColor: {
    padding:5,
    backgroundColor: "#06021B",
    height: "100%"
  },
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop:10,
    backgroundColor: "rgba(106,103,244,1)",
    height: 50,
    width:100,
    borderRadius:10,
    // left: "70%",
    justifyContent: "center",
    alignItems: "center"
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