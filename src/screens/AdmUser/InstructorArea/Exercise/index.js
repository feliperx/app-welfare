import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import MenuBarAdm from "../../../../components/MenuBar/menuBarAdm";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Exercise Group</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerformanceStudent");
        }}
      >
        <Text>Add Student</Text>
        <Ionicons name="ios-information-circle" size={24} color="black" />
      </TouchableOpacity>
      <MenuBarAdm />
    </View>
  );
};
