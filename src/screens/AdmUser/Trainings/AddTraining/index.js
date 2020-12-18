import React, { useState } from "react";
import { 
  Space,
  Container,
  Title, 
  TitleContainer, 
  VideoBox,
  Label,
  Box,
  Row,
  RadioText,
  Tag,
  TagText,
  TagsBox
} from './style'

import { AntDesign } from '@expo/vector-icons'; 

import {  RadioButton } from 'react-native-paper'

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

export default function PerformanceStudent({ navigation }) {
  const [ numberOfRepetitions, setNumberOfRepetitions ] = useState("")
  const [trainingMeasured, setTrainingMeasured] = React.useState('first');

  function goBack() {
    navigation.navigate("Trainings")
  }

  function addStudant() {
    console.log(name, email. contact, weight, height)
  }

  return (
 
      <Container>
        <Space flex={1}>
          <AntDesign onPress={goBack} name="close" size={24} color="black" />
        </Space>
        
        <TitleContainer>
          <Title>Adicionar Treinamento</Title>
        </TitleContainer>
  
        <Label>Qual exercício</Label>

       
        <VideoBox>
            <AntDesign name="plus" size={24} color="white" />
        </VideoBox>

        <Label>Qual treinamento será medido.</Label>
        
        <Box>
          <Row>
         
            <RadioButton
              value="Series"
              status={ trainingMeasured === 'Series' ? 'checked' : 'unchecked' }
              onPress={() => setTrainingMeasured('Series')}
            />
               <RadioText>Série</RadioText>
          </Row>
        
          <Row>
            <RadioButton
              value="Time"
              status={ trainingMeasured === 'Time' ? 'checked' : 'unchecked' }
              onPress={() => setTrainingMeasured('Time')}
            />
             <RadioText>Tempo</RadioText>
          </Row>
         
        </Box>

        <Input keyboardType="numeric" value={numberOfRepetitions} setValue={setNumberOfRepetitions} label="Numero de repetições"/>

        <Label>Quais músculos são indicados para treinar.</Label>
        
        <TagsBox>
          <Tag>
            <TagText>Pernas</TagText>
          </Tag>
          <Tag>
            <TagText>Peito</TagText>
          </Tag>
          <Tag>
            <TagText>Braços</TagText>
          </Tag>
          <Tag>
            <TagText>Ombros</TagText>
          </Tag>
          <Tag>
            <TagText>Trapézio</TagText>
          </Tag>
        </TagsBox>

        <Button onPress={() => {
          navigation.navigate("AddSucessTrain")
        }} text="Registrar" />
    
      </Container>
 

  );
};
