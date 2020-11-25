import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import SignIn from "../screens/ClientUser/SignIn";
import Training from "../screens/ClientUser/Training";
import Exercise from "../screens/ClientUser/Training/exercise";
import Chats from "../screens/ClientUser/Chats";
import PerformanceGraph from "../screens/ClientUser/Performance";

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="PerformanceGraph" component={PerformanceGraph} />
      <Stack.Screen name="Training" component={Training} />
      <Stack.Screen name="Exercise" component={Exercise} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
