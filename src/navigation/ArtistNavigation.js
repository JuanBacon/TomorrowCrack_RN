import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ArtistScreen from '../screens/ArtistScreen';


const Stack = createStackNavigator();

export default function ArtistNavigation() {
  return (

    <Stack.Navigator>
        <Stack.Screen name= 'AArtista' component={ArtistScreen} />
    </Stack.Navigator>
  )
}