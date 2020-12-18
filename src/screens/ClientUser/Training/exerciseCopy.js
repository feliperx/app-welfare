import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native"; 
import TimeFormatter from 'minutes-seconds-milliseconds';

export default () => {

  const navigation = useNavigation();

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  } 

  function minutes(seconds) {
    minutes = seconds / 60; 
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 20);
      }, 1);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../images/squat.jpg")}
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
          <View style={styles.containerTopExercise}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="md-arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.titleExercise}>Squat</Text>
            <View>
              <Text style={styles.totalTimeExercise}>10:00min</Text>
            </View>
          </View>

          <View style={styles.chronometerContainer}>
            <Text style={styles.timeCurrent}>{TimeFormatter(seconds)}</Text>

            <TouchableOpacity
              style={styles.buttomStart}
              onPress={toggle} 
              onLongPress={reset}
            >
              <Ionicons name = { isActive ? "ios-pause": "ios-play" } size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
