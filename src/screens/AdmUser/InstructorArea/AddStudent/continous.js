import React from "react";
import {
  Background,
  Space,
  Container,
  Title,
  Tag,
  TagText,
  TitleContainer,
  ChooseTraining,
  Row,
  styles,
  VideoBox,
} from "./style";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../../../components/Button"
import background from "../../../../images/Main.png";

export default function PerformanceStudent({ navigation }) {
  function goBack() {
    navigation.navigate("AddStudent");
  }

  return (
    <Background source={background}>
      <Space flex={2} />

      <Container>
        <Space flex={1}>
          <AntDesign onPress={goBack} name="close" size={24} color="black" />
        </Space>

        <TitleContainer>
          <Title>Adicionar Aluno</Title>
        </TitleContainer>

        <Text style={styles.subtitle}>Quais alunos?</Text>
        <VideoBox>
          <TouchableOpacity>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </VideoBox>
        <View style={styles.containerWhatDays}>
          <Text style={styles.subtitle}>Quais dias de treino?</Text>

          <View style={styles.containerAdd}>
            <Text style={{ color: "#C4C4C4", fontWeight: "bold" }}>Add</Text>
            <TouchableOpacity>
              <Ionicons name="ios-add-circle" style={styles.buttomAdd} />
            </TouchableOpacity>
          </View>
        </View> 
        <ChooseTraining>
          <Row>
            <Tag>
              <TagText>24/09/2020</TagText>
            </Tag>
            <Tag>
              <TagText>25/09/2020</TagText>
            </Tag>
            <Tag>
              <TagText>27/09/2020</TagText>
            </Tag>
          </Row>
        </ChooseTraining> 

        <Button onPress={() => {
          alert("Registrado com Sucesso.")
        }} text="Registrar" />

      </Container>
    </Background>
  );
}
