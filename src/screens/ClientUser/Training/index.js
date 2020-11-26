import React from "react";
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
import { styles, BackgroundLinearGradient } from "./style";
import MenuBar from "../../../components/MenuBar/menuBarCli";
import Header from "../../../components/Header";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header name="Chico" />
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>Your{"\n"}Workouts</Text>
          <View style={styles.containerWeight}>
            <View style={styles.boxInputWeight}>
              <TextInput
                style={styles.inputWeight}
                placeholder="Your weight today?" 
              />
              <Ionicons name="md-fitness" size={14} color="#C4C4C4" />
            </View>
          </View>
        </View>
        <View style={styles.containerView}>
          <View style={styles.exercisesView}>
            <ImageBackground
              source={require("../../../images/bike.png")}
              style={styles.exercise}
            >
              {/* <LinearGradient
                // Background Linear Gradient
                colors={[
                  "rgba(136, 253, 208, 0.7)",
                  "rgba(136, 253, 208, 0.7)",
                ]}
                
              /> */}

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Exercise");
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

      <MenuBar />
    </KeyboardAvoidingView>
  );
};
