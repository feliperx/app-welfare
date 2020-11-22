import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import InstructorArea from "./screens/AdmUser/InstructorArea";

export default () => (

  <NavigationContainer>
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
    >

    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="InstructorArea" component={InstructorArea} />

    
      
    </Stack.Navigator>
  </NavigationContainer>
);
