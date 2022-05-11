import { Text, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContentScreen from "../screens/ContentScreen";

const Stack = createStackNavigator();

export default class ContentNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name=" " component={ContentScreen} options = {{headerShown: false}} />
      </Stack.Navigator>
    );
  }
}
