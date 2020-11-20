import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/mainStack";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <NavigationContainer style={styles.background}>
      {/* <MainStack/>  */}

      <View style={styles.containerLogo}>
        <Image source={require("./public/images/logo.png")} />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => alert("Login!")}
        >
          <Text style={{ color: "#fafdfb" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => alert("Sign Up!")}
        >
          <Text style={{ color: "#fafdfb" }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footer}> Forgot your password?</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  background:{ 
    flex:1, 
     backgroundColor: "#fff",
    
  },
  containerLogo: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#fff",
    margin: 35,
  },
  header: {
    height: 60,
  },
  input: {
    height: 60,
    marginVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 14,
    borderColor: "green",
    backgroundColor: "#f2f2f2",
    color: "#333",
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#99E9E6",
    marginVertical: 8,
    marginTop: 75,
    color: "#fafdfb",
    padding: 15,
    borderRadius: 14,
  },
  buttonSignUp: {
    alignItems: "center",
    backgroundColor: "#C5CFDA",
    marginVertical: 8,
    color: "#fafdfb",
    padding: 15,
    borderRadius: 14,
  },
  footer: {
    marginTop: 30,
    color: "#88FDD0",
    textAlign: "center",
    fontWeight: "bold",
  },
});
