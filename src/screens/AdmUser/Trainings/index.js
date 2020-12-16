import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import MenuBarAdm from "../../../components/MenuBar/menuBarAdm";
import Header from "../../../components/Header";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import perfil from "../../../images/perfil.png";

export default () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header name="Robert Fox" avatar={perfil} />
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>Trainings</Text>
          <View style={styles.containerWeight}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddTraining")
              }}
            >
              <Ionicons name="ios-add-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerView}>
          <View style={styles.exercisesView}>
            <ImageBackground
              source={require("../../../images/bike.png")}
              style={styles.exercise}
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

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ExerciseGroup");
                }}
              >
                <AntDesign name="play" size={24} color="#fff" />
              </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.nameExercise}>Bike</Text>
          </View>

          <View style={styles.exercisesView}>
            <ImageBackground
              source={require("../../../images/squat2.jpg")}
              style={styles.exercise}
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Exercise");
                }}
              >
                <AntDesign name="play" size={24} color="#fff" />
              </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.nameExercise}>Squat</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Activity during the day</Text>
        </View>
        <View>
          <Text style={styles.footerTotalTime}>2h and 30m</Text>
        </View>
      </View>

      <MenuBarAdm />
    </KeyboardAvoidingView>
  );
};
