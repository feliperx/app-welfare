import React, { useState } from "react";
import { 
  Background,
  Space,
  Container,
  Title, 
  TitleContainer, 
} from './style'

import { AntDesign } from '@expo/vector-icons'; 

import background from '../../../../images/Main.png'

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

export default function PerformanceStudent({ navigation }) {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ contact, setContact ] = useState("")
  const [ weight, setWeight ] = useState("")
  const [ height, setHeight ] = useState("")

  function goBack() {
    navigation.navigate("InstructorArea")
  }

  function addStudant() {
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
          <Title>Adicionar Aluno</Title>
        </TitleContainer>

        <Input value={name} setValue={setName} label="Nome"/>

        <Input value={email} setValue={setEmail} label="Email"/>

        <Input value={contact} setValue={setContact} label="Contato"/>

        <Input keyboardType="numeric" value={weight} setValue={setWeight} label="Peso"/>

        <Input keyboardType="numeric" value={height} setValue={setHeight} label="Altura"/>

        <Button onPress={() => {
          navigation.navigate("AddStudentContinous")
        }} text="Registrar" />
    
      </Container>
    </Background>

  );
};
