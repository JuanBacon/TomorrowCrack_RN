import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CheckOutScreen from '../screens/CheckOutScreen';


const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name='Carrito' component={CartScreen} />
        <Stack.Screen name='Payment' component={PaymentScreen} />
        <Stack.Screen name='CheckOut' component={CheckOutScreen} />


    </Stack.Navigator>
    )
}