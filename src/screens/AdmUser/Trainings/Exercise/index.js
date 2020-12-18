import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../../images/Main.png")}
        style={{
          height: "100%",
          resizeMode: "center",
        }}
      >
        <View style={styles.container}>
          <View style={styles.containerTop}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="md-arrow-back" size={24} color="white" />
            </TouchableOpacity>
              </View>
            <View style={styles.containerStudent}>
              <Text style={styles.nameStudent}>Rebeca Silva</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PerformanceStudent");
                }}
              >
                <Ionicons
                  name="ios-information-circle"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View> 

            <View style={styles.containerStudent}>
              <Text style={styles.nameStudent}>Marlon Belo</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PerformanceStudent");
                }}
              >
                <Ionicons
                  name="ios-information-circle"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View> 

            <View style={styles.containerStudent}>
              <Text style={styles.nameStudent}>Vanessa Naveca</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PerformanceStudent");
                }}
              >
                <Ionicons
                  name="ios-information-circle"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>

        </View>
      </ImageBackground>
    </View>
  );
};
