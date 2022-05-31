import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistNavigation from "./ArtistNavigation";
import GalleryNavigation from "./GalleryNavigation";
import CartNavigation from "./CartNavigation";
import HomeScreen from "./HomeNavigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const tabBarOptions = {
    style: {
      backgroundColor: "rgba(30,25,59,0.9)",
      elevation: 0,
      position: "absolute",
      height: 77,
      paddingTop: 12,
      paddingBottom: 9.9,
      paddingLeft: 29,
      paddingRight: 29,
    },
    showLabel: false,
    headerShown: false,
  };


  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Tickets"
        component={CartNavigation}
        options={{ tabBarIcon: ({focused}) => icono("confirmation-number", focused) }}
      />
      <Tab.Screen
        name="Artista"
        component={ArtistNavigation}
        options={{ tabBarIcon: ({focused}) => icono("recent-actors", focused), tabBarBadge: 5 }}
      />
      <Tab.Screen
        name="Principal"
        component={HomeScreen}
        options={{ tabBarIcon: ({focused}) => icono("home", focused) }}
      />
      <Tab.Screen
        name="Galeria"
        component={GalleryNavigation}
        options={{ tabBarIcon: ({focused}) => icono("image",focused) }}
      />
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
  },
});

function icono(iconName, focused) {

  let color = focused ? "#6A67F4" : "#ffffff"
  return (
    <MaterialIcons
      name={iconName}
      size={50}
      color={color}
    ></MaterialIcons>
  );
}
