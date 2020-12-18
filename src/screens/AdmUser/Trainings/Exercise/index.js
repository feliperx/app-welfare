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
        source={require("../../../../images/rope.jpeg")}
        style={{
          height: "100%",
          resizeMode: "center",
        }}
      >
        <LinearGradient
          colors={["rgba(136, 253, 208, 0.7)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
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
              <Text style={styles.nameStudent}>Jacob Jones</Text>
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
              <Text style={styles.nameStudent}>Ronald Richards</Text>
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
              <Text style={styles.nameStudent}>Leslie Alexander</Text>
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
