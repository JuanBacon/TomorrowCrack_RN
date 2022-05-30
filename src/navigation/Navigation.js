import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistNavigation from "./ArtistNavigation";
import GalleryNavigation from "./GalleryNavigation";
import CartNavigation from "./CartNavigation";
import HomeScreen from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: "rgba(30,25,59,0.7)",
        elevation: 0,
        position: "absolute",
        height: 77,
        paddingTop: 12,
        paddingBottom: 9.9,
        paddingLeft: 29,
        paddingRight: 29,
        backdropFilter: "blur(6px)",
      },
      showLabel: true,
      headerShown: false
    }}>
      <Tab.Screen name="Artista" component={ArtistNavigation}  />
      <Tab.Screen name="Galeria" component={GalleryNavigation} />
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={CartNavigation} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    navtab: {
      paddingTop: 12,
      paddingBottom: 9.9,
      paddingLeft: 29,
      paddingRight: 29,
      backgroundColor: "rgba(30,25,59,0.7)",
      backdropFilter: "blur(6px)",
      mixBlendMode: "normal",
      width: 414,
      height: 76.9,
    }
});
