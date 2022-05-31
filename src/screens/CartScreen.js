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
    <SafeAreaView styles={styles.safeContainer}>
      <Text>CartScreen</Text>
      <CartItem
        ticketName="vip1"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <CartItem
        ticketName="vip2"
        price={tickectsPrice}
        changeValue={(ticketCount) => setValues(ticketCount)}
        ticketObj={values}
      />
      <Text>Total = {total}</Text>
      <Pressable style={styles.button} onPress= {()=>{navigation.navigate('Payment',{totalPrice : total})}} >
        <Text>Boton</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const ticketsInputValues = {
  vip1: 0,
  vip2: 0,
  vip3: 0,
};

const tickectsPrice = {
  vip1: 20000,
  vip2: 50000,
  vip3: 60000,
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'green',
    height: 30
  }
});
