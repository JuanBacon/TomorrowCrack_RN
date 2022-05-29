import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistNavigation from "./ArtistNavigation";
import GalleryNavigation from "./GalleryNavigation";
import CartNavigation from "./CartNavigation";
import HomeScreen from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="artista" component={ArtistNavigation}  />
      <Tab.Screen name="galeria" component={GalleryNavigation} />
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={CartNavigation} />
    </Tab.Navigator>
  );
}
