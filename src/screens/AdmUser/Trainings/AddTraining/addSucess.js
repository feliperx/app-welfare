import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { styles } from "./style";

export default () => {

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require("../../../../images/sucessAddTrain.png")} />
      </View>

      <View style={styles.containerBottom}> 
        <Text style={styles.text}>Treino adicionado{"\n"}com sucesso.</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("InstructorArea")
          }}
          >
          <Text style={styles.footer}> Adicionar aluno ao treino?</Text>
        </TouchableOpacity> 
        </View> 
    </KeyboardAvoidingView>
  );
};
