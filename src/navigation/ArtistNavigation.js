import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ArtistScreen from '../screens/ArtistScreen';


const Stack = createStackNavigator();

export default function ArtistNavigation() {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name= 'Artista' component={ArtistScreen} />
    </Stack.Navigator>
  )
}