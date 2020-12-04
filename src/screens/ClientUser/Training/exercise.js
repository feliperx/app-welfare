import React from "react";
import { Text, View } from "react-native"; 
import { BackgroundExercise } from "./style"
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
} from "react-native"; 

export default () => {
  return (
    <View> 
      <BackgroundExercise image={require("../../../images/bike.png")} />
      
    </View>
  );
};