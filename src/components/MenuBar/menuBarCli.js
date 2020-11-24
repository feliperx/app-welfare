import React from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import {useNavigation} from "@react-navigation/native";

import { styles } from "./style";

export default () => { 

    const navigation = useNavigation();

  return (
    <View style={styles.menuBar}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Training");
        }}
      >
        <Text style={styles.buttonMenuBar}>FV</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerformanceGraph");
        }}
      >
        <Text style={styles.buttonMenuBar}>L</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Chats");
        }}
      >
        <Text style={styles.buttonMenuBar}>J</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.buttonMenuBar}>S</Text>
      </TouchableOpacity>
    </View>
  );
};
