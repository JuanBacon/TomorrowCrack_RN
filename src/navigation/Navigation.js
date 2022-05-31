import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistNavigation from "./ArtistNavigation";
import GalleryNavigation from "./GalleryNavigation";
import CartNavigation from "./CartNavigation";
import HomeScreen from "./HomeNavigation";
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
<<<<<<< HEAD
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Principal" >
      <Tab.Screen name="artista" component={ArtistNavigation}  />
      <Tab.Screen name="galeria" component={GalleryNavigation} />
      <Tab.Screen name="Principal" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={CartNavigation} />
=======
    <Tab.Navigator tabBarOptions={{
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
      activeTintColor: "#f00"
      
    }}>
      <Tab.Screen name="Tickets" component={CartNavigation} options = {{tabBarIcon: () => icono ('confirmation-number')}} />
      <Tab.Screen name="Artista" component={ArtistNavigation} options = {{tabBarIcon: () => icono ('recent-actors'),tabBarBadge:5}} />
      <Tab.Screen name="Principal" component={HomeScreen} options = {{tabBarIcon: () => icono ('home')}} />
      <Tab.Screen name="Galeria" component={GalleryNavigation} options = {{tabBarIcon: () => icono ('image')}}/>
>>>>>>> develop
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

function icono (iconName){
  
  return(<MaterialIcons name={iconName} size ={50} color={iconName == "home" ? "#6A67F4" : "#ffffff"}></MaterialIcons>)
  }