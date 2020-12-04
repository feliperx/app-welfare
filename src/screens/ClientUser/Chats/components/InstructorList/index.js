import React from "react";
import { 
  Container,
  Footer, 
  InstructorList, 
  Title, 
  SubTitle, 
  Image, 
  TitleContainer, 
  SubTitleContainer, 
  ButtonBox, 
  FlexEnd,
  FlexStart, 
  Text, 
  WeakText,
  TextContainer
} from './style'

import perfil from '../../../../../images/perfil.png'

import Header from "../../../../../components/Header";
import MenuBar from "../../../../../components/MenuBar/menuBarCli"; // Importando o MenuBar

export default function ComponentInstructorList({ instructors, setInstructor }) {
  function goToConversation(item) { 
    setInstructor(item)
  } 

  return (
    <Container>
      <Header avatar={perfil} name="Robert Fox" />

      <TitleContainer>
        <Title>Minhas</Title>
        <Title>Conversas</Title>
      </TitleContainer>
      
      <SubTitleContainer>
        <SubTitle>Instrutores</SubTitle>
      </SubTitleContainer>

      <InstructorList>
        {instructors.map(item => (
          <ButtonBox activeOpacity={0.8} key={item.name} onPress={() => goToConversation(item)}>
            <FlexStart>
              <Image source={item.avatar} />
              <TextContainer>
                <Text>{item.name}</Text>
                <WeakText>{item.activity}</WeakText>
              </TextContainer>
            </FlexStart>

            <FlexEnd>
              <WeakText>{item.hour}</WeakText>
            </FlexEnd>
          </ButtonBox>
        ))}
       
      </InstructorList>

      <Footer>
        <MenuBar/>
      </Footer>
     
    </Container>
  );
};
