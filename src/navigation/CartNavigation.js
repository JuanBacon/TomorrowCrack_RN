import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../screens/CartScreen';


const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name='Carrito' component={CartScreen} />
    </Stack.Navigator>
    )
}