import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import MenuBarAdm from "../../../components/MenuBar/menuBarAdm";
import Header from "../../../components/Header";
import perfil from "../../../images/perfil.png";  
import ContainerTraining from "./components/containerTrainings"



export default () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header name="Cameron Willianson" avatar={perfil} />
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>Treinos</Text>
          <View style={styles.containerAdd}> 
            <Text style={{color: "#C4C4C4", fontWeight: "bold"}}>Add</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddTraining")
              }}
            > 
              
              <Ionicons name="ios-add-circle" style={styles.buttomAdd} />
            </TouchableOpacity>
          </View>
        </View>

        
      <ContainerTraining 
      title={"Grupo dos Corredores"} 
      nameExercise={"Bicicleta"} image={require("../../../images/bike.png")}
      nameExercise2={"Agachamento"} image2={require("../../../images/squat.jpg")}
      /> 

      <ContainerTraining 
      title={"Jose Pereira"} 
      nameExercise={"Corda"} image={require("../../../images/rope.jpeg")}
      nameExercise2={"Bicicleta"} image2={require("../../../images/bike.png")}
      /> 

    
      </View>


      <MenuBarAdm />
    </KeyboardAvoidingView>
  );
};
