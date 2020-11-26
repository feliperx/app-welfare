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
import { styles } from "./style";
import MenuBar from "../../../components/MenuBar/menuBarCli";
import Header from "../../../components/Header";
import { Ionicons, AntDesign } from "@expo/vector-icons";

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
                placeholder="Your weight today"
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
        </View>
      </View>

      <MenuBar />
    </KeyboardAvoidingView>
  );
};
