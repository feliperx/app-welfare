import React from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import {useNavigation} from "@react-navigation/native"; 
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 

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
        <MaterialCommunityIcons name="run" style={styles.buttonMenuBar}/>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { 
          navigation.navigate("PerformanceGraph");
        }}
      >
        <MaterialCommunityIcons name="chart-line-variant" style={styles.buttonMenuBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Chats");
        }}
      >
        <MaterialIcons name="chat" style={styles.buttonMenuBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <MaterialIcons name="exit-to-app" style={styles.buttonMenuBar} />
      </TouchableOpacity>
    </View>
  );
}; 
