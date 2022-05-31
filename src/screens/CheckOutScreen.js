import { View, Text, Button } from 'react-native'
import React from 'react'

export default function CheckOutScreen({ route, navigation }) {
    const { totalPrice } = route.params;

    console.log(totalPrice);
  return (
    <View>
      <Button title="Atras" onPress={() => navigation.goBack()} />

      <Text>CheckOutScreen</Text>
    </View>
  )
}