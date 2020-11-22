import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View style={styles.containerLogo}>
        <Image source={require("../../../public/images/logo.png")} />
      </Animated.View>

      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>

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
