import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  ScrollView,
} from "react-native";  
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons"

import { styles } from "./style";
import MenuBarAdm from "../../../components/MenuBar/menuBarAdm" 
import ContainerTraining from "../Trainings/components/containerTrainings";
import Header from "../../../components/Header";
import perfil from "../../../images/perfil.png";



export default () => {

  const navigation = useNavigation();

  const [selected, setSelected] = useState(0);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header name="Cameron Williamson" avatar={perfil} />

      <View style={styles.container}>
        <Text style={styles.title}>Instructor Area</Text>
        <View style={styles.containerView}>
          <View style={styles.options}>
            <TouchableOpacity onPress={() => setSelected(0)}>
              <Text
                style={[
                  styles.text,
                  styles.option,
                  selected === 0 ? styles.optionSelected : null,
                ]}
              >
                Students
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(1)}>
              <Text
                style={[
                  styles.text,
                  styles.option,
                  selected === 1 ? styles.optionSelected : null,
                ]}
              >
                Exercises
              </Text>
            </TouchableOpacity>
          </View>
          {selected === 0 ? (
            <View>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => {
                  navigation.navigate("AddStudent");
                }}
              >
                <Text>Add Student</Text>
                <Ionicons
                  style={{ paddingLeft: 6 }}
                  name="ios-add-circle"
                  size={24}
                  color="#88FDD0"
                />
              </TouchableOpacity>
              <View style={styles.containerOptions}>
                <View style={styles.card}>
                  <Image
                    source={require("../../../images/perfil.png")}
                    width={50}
                    height={50}
                    style={{ borderRadius: 10 }}
                  />
                  <Text style={styles.text}>Albert</Text>
                </View>
                <View style={styles.card}>
                  <Image
                    source={require("../../../images/perfil2.png")}
                    width={50}
                    height={50}
                    style={{ borderRadius: 10 }}
                  />
                  <Text style={styles.text}>Albert</Text>
                </View>
              </View>
              <View style={styles.containerOptions}>
                <View style={styles.card}>
                  <Image
                    source={require("../../../images/perfil3.png")}
                    width={50}
                    height={50}
                    style={{ borderRadius: 10 }}
                  />
                  <Text style={styles.text}>Albert</Text>
                </View>
                <View style={styles.card}>
                  <Image
                    source={require("../../../images/perfil.png")}
                    width={50}
                    height={50}
                    style={{ borderRadius: 10 }}
                  />
                  <Text style={styles.text}>Albert</Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => {
                  navigation.navigate("AddExercise");
                }}
              >
                <Text>Add Exercise</Text>
                <Ionicons
                  style={{ paddingLeft: 6 }}
                  name="ios-add-circle"
                  size={24}
                  color="#88FDD0"
                />
              </TouchableOpacity>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                  <ContainerTraining
                    title={"Runners Group"}
                    nameExercise={"Bike"}
                    image={require("../../../images/bike.png")}
                    nameExercise2={"Squat"}
                    image2={require("../../../images/squat.jpg")}
                  />

                  <ContainerTraining
                    title={"Jacob Jones"}
                    nameExercise2={"Squat"}
                    image2={require("../../../images/squat2.jpg")}
                    nameExercise={"Bike"}
                    image={require("../../../images/bike.png")}
                  />
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
      <MenuBarAdm />
    </KeyboardAvoidingView>
  );
};
