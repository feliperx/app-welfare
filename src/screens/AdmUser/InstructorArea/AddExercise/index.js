import React, { useState } from "react";
import { 
  Background,
  Space,
  Container,
  Title, 
  TitleContainer, 
  VideoBox,
  Label
} from './style'

import { AntDesign } from '@expo/vector-icons'; 

import background from '../../../../images/Main.png'

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

export default function PerformanceStudent({ navigation }) {
  const [ name, setName ] = useState("")
  const [ video, setVideo ] = useState("")

  function goBack() {
    navigation.navigate("ExerciseGroup")
  }

  function addExercise() {
    console.log(name, email. contact, weight, height)
  }

  return (
    <Background source={background}>
      <Space flex={2} />

      <Container>
        <Space flex={1}>
          <AntDesign onPress={goBack} name="close" size={24} color="black" />
        </Space>
        
        <TitleContainer>
          <Title>Adicionar Exercicio</Title>
        </TitleContainer>

        <Input value={name} setValue={setName} label="Nome"/>

        <Label>Video</Label>

        <VideoBox>
            <AntDesign name="plus" size={24} color="white" />
        </VideoBox>

        <Button onPress={addExercise} text="Registrar" />
    
      </Container>
    </Background>

  );
};
