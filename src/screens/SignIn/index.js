import React, { useState } from "react";
import Input from '../../components/Input'
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { styles } from "./styles";

export default () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View style={styles.containerLogo}>
        <Image source={require("../../../public/images/logo.png")} />
      </Animated.View>

      <View style={styles.container}>
        <Input value={email} setValue={setEmail} label="Email"/>
        <Input value={password} setValue={setPassword} label="Senha" />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("InstructorArea");
          }}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footer}> Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
