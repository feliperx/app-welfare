import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import {useNavigation} from "@react-navigation/native"; 
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 

import { styles } from "./style"; 


export default () => { 

    const navigation = useNavigation(); 

    const [isActive, setIsActive] = useState(false) 

  useEffect(() => { 


  }, [isActive])

  return (
    <View style={styles.menuBar}>
      <TouchableOpacity 
          onPress={() => { 
            navigation.navigate("Trainings");
        }}
      >
        <MaterialCommunityIcons name="run" style={styles.buttonMenuBar}/>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => { 
            navigation.navigate("InstructorArea");
        }}
      >
        <FontAwesome name="users" style={styles.buttonMenuBar} />      
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { 
          navigation.navigate("Notifications");
        }}
      > 
        <MaterialCommunityIcons name="bell" style={styles.buttonMenuBar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChatsAdm") 
        }}
      >
        <MaterialIcons name="chat" style={styles.buttonMenuBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignInAdm");
        }}
      >
        <MaterialIcons name="exit-to-app" style={styles.buttonMenuBar} />
      </TouchableOpacity>
    </View>
  );
}; 
