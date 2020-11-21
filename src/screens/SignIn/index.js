import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { styles } from "./styles";

export default () => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 20 }));

//   useEffect(() => {
//     Animated.spring(offset.y, {
//       toValue: 0,
//       speed: 4,
//     }).start();
//   }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View
        style={[
          styles.containerLogo,
          {
            transform: [{ translateY: offset.y }]
          }
        ]}
      >
        <Image source={require("../../../public/images/logo.png")} />
      </Animated.View>

      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => alert("Login!")}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => alert("Sign Up!")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footer}> Forgot your password?</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
