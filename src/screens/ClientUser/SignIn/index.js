import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import Input from '../../../components/Input'
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
            navigation.navigate("Training");
          }}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footer}> Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
