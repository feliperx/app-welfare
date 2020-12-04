import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native"; 

import Input from '../../../components/Input'
import { styles } from "./style";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default () => {
  const [ email, setEmail ] = useState("")
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}> 
        <FontAwesome5 name="lock" size={34} color="black" style={styles.icon}/>
        <Text style={styles.textBlack}>
            Enter your email adress and we'll send you a link to reset your password.</Text>
        <Input value={email} setValue={setEmail} label="Email"/>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            alert("Successfully")
          }}
        >
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};