import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "./style";

export default () => {

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require("../../images/logo.png")} />
      </View>

      <View style={styles.container}>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("SignInAdm");
          }}
        >
          <Text style={styles.text}>Instructor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate("SignInCli");
          }}
        >
          <Text style={styles.text}>Student</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
