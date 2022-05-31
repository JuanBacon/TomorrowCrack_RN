import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/CartItem";

export default function CartScreen() {
  const [values, setValues] = useState(ticketsInputValues);

  const total = Object.keys(values).map(calTotal).reduce((prev, next) => prev+ next)

  function calTotal(key){
    return( tickectsPrice[key]*values[key])
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
});
