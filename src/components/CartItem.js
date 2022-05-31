import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

export default function CartItem(props) {
  const { ticketName, changeValue,ticketObj, price} = props;
  const ticketPrice = price[ticketName]
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.name} >{ticketName}</Text>
      <Text style={styles.textVal}>${ticketPrice}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          const addCounter = count + 1;
          setCount(addCounter);
          changeValue({ ...ticketObj, [ticketName]: addCounter });
        }}
      >
        <Text style={styles.textDesc}>+</Text>
      </Pressable>  
      <Text>{count}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          let restCounter = count - 1;
          if (restCounter <= 0) restCounter = 0;
          restCounter <= 0 ? setCount(0) : setCount(restCounter);
          changeValue({ ...ticketObj, [ticketName]: restCounter });
        }}
      >
      <Text style={styles.textDesc} >-</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    backgroundColor: "rgba(48,43,79,0.8)",
    alignItems: "center",
    marginVertical: 8,
    borderRadius:25,
    flexDirection:"row",
  },
  button: {
    backgroundColor: "gray",
    width: 30,
    height: 30,
    borderRadius:100,
    right: 20,
    marginLeft:25,
  },
  input: {
    backgroundColor: "white",
    marginVertical: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  name: {
    flexGrow: 1,
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    right: 50,
    color: "white"
  },
  textVal: {
    flexShrink: 1,
    color: "white",
    right: 120,
  },
  textDesc: {
    flexShrink: 1,
    color: "white",
    left: 10
  },
});
