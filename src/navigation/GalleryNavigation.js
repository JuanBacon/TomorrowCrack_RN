import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GalleryScreen from "../screens/GalleryScreen";

const Stack = createStackNavigator();

export default function GalleryNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Galeria" component={GalleryScreen} />
    </Stack.Navigator>
  );
}
