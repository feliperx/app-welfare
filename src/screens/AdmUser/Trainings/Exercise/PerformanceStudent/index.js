import React from "react";
import { 
  Background,
  Space,
  Container, 
  InstructoGraphic, 
  Title, 
  SubTitle, 
  Tag,
  TagText,
  TitleContainer, 
  ChooseTraining,
  Row,
  BoxContent,
  Text,
  TextDescription
} from './style'

import { AntDesign } from '@expo/vector-icons'; 

import perfil from '../../../../../images/perfil.png'
import background from '../../../../../images/Main.png'
import grafico from '../../../../../images/grafico.png'
import Header from "../../../../../components/Header";

export default function PerformanceStudent({ navigation }) {

  function goBack() {
    navigation.navigate("ExerciseGroup")
  }

  return (
    <Background source={background}>
      <Space flex={2} />

      <Container>
        <Space flex={1}>
          <AntDesign onPress={goBack} name="close" size={24} color="black" />
        </Space>
        <Header avatar={perfil} name="Cameron Willianson" />

        <TitleContainer>
          <Title>Darrell Steward</Title>
        </TitleContainer>
        
        <ChooseTraining>
          <SubTitle>Quais dias de treinamento?</SubTitle>
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

        <InstructoGraphic source={grafico} />

        <BoxContent>
          <Text>24/02/2020</Text>
          <TextDescription>2h e 30 minutos</TextDescription>
        </BoxContent>
        <BoxContent>
          <Text>22/02/2020</Text>
          <TextDescription>2h e 10 minutos</TextDescription>
        </BoxContent>

    
      </Container>
    </Background>

  );
};
