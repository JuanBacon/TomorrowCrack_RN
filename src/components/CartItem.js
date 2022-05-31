import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

export default function CartItem(props) {
  const { ticketName, changeValue,ticketObj, price} = props;
  const ticketPrice = price[ticketName]
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{ticketName}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          const addCounter = count + 1;
          setCount(addCounter);
          changeValue({ ...ticketObj, [ticketName]: addCounter });
        }}
      >
        <Text>+</Text>
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
        <Text>-</Text>
      </Pressable>
      <Text>Valor: ${ticketPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "80%",
    backgroundColor: "gray",
    alignItems: "center",
    marginHorizontal: "10%",
    marginVertical: 6
  },
  button: {
    backgroundColor: "#fff",
    width: 20,
  },
  input: {
    backgroundColor: "#ff8",
    marginVertical: 5,
  },
});
