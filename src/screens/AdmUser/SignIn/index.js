import React, { useState } from "react";

import Input from '../../../components/Input'

import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { styles } from "./style";

export default () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View style={styles.containerLogo}>
        <Image source={require("../../../images/logo.png")} />
      </Animated.View>

      <View style={styles.container}>
        <Input value={email} setValue={setEmail} label="Email"/>
        <Input value={password} setValue={setPassword} label="Senha" />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("Trainings");
          }}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword")
          }}
          >
          <Text style={styles.footer}> Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
