import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";  
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons"

import { styles } from "./style";
import MenuBarAdm from "../../../components/MenuBar/menuBarAdm"

export default () => {

  const navigation = useNavigation();


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.sideBarTop}>
        <Text style={styles.text}> Name</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Instructor Area</Text> 
        <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddStudent")
              }}
            > 
              <Text>Add Student</Text>
              <Ionicons name="ios-add-circle" size={24} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddExercise")
              }}
            > 
              <Text>Add Exercise</Text>
              <Ionicons name="ios-add-circle" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.containerView}>
          <View style={styles.options}>
          <Text style={styles.text}>Students</Text>
          <Text style={styles.text}>Exercises</Text>
          </View>
        </View>
      </View>
      <MenuBarAdm/>
      
    </KeyboardAvoidingView>
  );
};
