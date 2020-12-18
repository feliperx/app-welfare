import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";

export default function MainContainerTraining({title, nameExercise, nameExercise2, image,  image2}) {

  const navigation = useNavigation();

  return (
      
    <View style={styles.container}> 
        <Text style={styles.title}>{title}</Text>
      <View style={styles.containerView}>
        <View style={styles.exercisesView}>
          <ImageBackground
            source={image}
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

          <Text style={styles.nameExercise}>{nameExercise}</Text>
        </View> 
        <View style={styles.exercisesView}>
          <ImageBackground
            source={image2}
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

          <Text style={styles.nameExercise}>{nameExercise2}</Text>
        </View>
      </View>
    </View>
  );
}
