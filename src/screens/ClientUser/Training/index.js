import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import MenuBar from "../../../components/MenuBar/menuBarCli";

export default () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Workout</Text>
        <View style={styles.containerView}>
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => {
              navigation.navigate("Exercise");
            }}
          >
            <Text style={styles.text}>V</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MenuBar />
    </KeyboardAvoidingView>
  );
};
