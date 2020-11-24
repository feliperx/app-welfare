import React from "react";
import { Text, View } from "react-native";

import MenuBar from "../../../components/MenuBar/menuBarCli"; // Importando o MenuBar

export default () => {
  return (
    <View style={{ flex: 1}}>
      <View style={{flex:1}}>
      </View>
      <MenuBar/>
    </View>
  );
};
