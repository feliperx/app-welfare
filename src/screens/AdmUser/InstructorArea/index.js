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

import { styles } from "./styles";

export default () => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.sideBarTop}>
        <Text style={styles.text}> Name</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Instructor Area</Text>
        <View style={styles.containerView}>
          <View style={styles.options}>
          <Text style={styles.text}>Students</Text>
          <Text style={styles.text}>Exercises</Text>
          </View>
        </View>
      </View>

      <View style={styles.sideBarBottom}>
        <TouchableOpacity>
          <Text style={styles.buttonSideBarBottom}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonSideBarBottom}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonSideBarBottom}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonSideBarBottom}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonSideBarBottom}>E</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
