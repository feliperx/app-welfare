import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import {useNavigation} from "@react-navigation/native"; 
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 

import { styles } from "./style"; 


export default () => { 

    const navigation = useNavigation(); 

    const [selected, setSelected] = useState(0); 

    useEffect(() => {

    }, [selected]);

  return (
    <View style={styles.menuBar}>
      <TouchableOpacity 
          onPress={() => { 
            setSelected(1)
            navigation.navigate("Trainings") 
        }}
      >
        <MaterialCommunityIcons name="run" style={styles.buttonMenuBar}/>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => { 
            setSelected(2)
            navigation.navigate("InstructorArea")
        }}
      >
        <FontAwesome name="users" style={styles.buttonMenuBar} />      
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { 
          setSelected(3)
          navigation.navigate("Notifications")
        }}
      > 
        <MaterialCommunityIcons name="bell" style={styles.buttonMenuBar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelected(4)
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
