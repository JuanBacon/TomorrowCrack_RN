import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'

import Navigation from "./src/navigation/Navigation";
import LoginForm from "./src/components/Auth/LoginForm";
import OnBoarding from "./src/navigation/OnBoarding";


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="onboarding" component={OnBoarding} /> */}
        {/* <Stack.Screen name="Login" component={LoginForm} /> */}
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
