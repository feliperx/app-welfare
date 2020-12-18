import React from "react";

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

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
import { View } from 'react-native'

import perfil from '../../../images/perfil.png'
import perfil2 from '../../../images/perfil2.png'
import perfil3 from '../../../images/perfil3.png'

import Header from "../../../components/Header";
import MenuBarAdm from "../../../components/MenuBar/menuBarAdm"; // Importando o MenuBar

export default function ComponentInstructorList() {

    const instructors = [{
        avatar: perfil2,
        name: "Marlon Belo",
        activity: "Aerobico",
        icon: <AntDesign name="info" size={18} style={{ padding: 5, borderRadius: 50, backgroundColor: "#99E9E6"}} color="white"  />
      },
      {
        avatar: perfil3,
        name: "Felipe Xaud",
        activity: "malhação",
        icon: <MaterialCommunityIcons name="weight" size={18} style={{ padding: 5, borderRadius: 50, backgroundColor: "#99E9E6"}} color="white" />
      }]

  return ( 
    <View style={{flex:1}}>
    <Container>
      <Header avatar={perfil} name="Robert Fox" />

      <TitleContainer>
        <Title>Notificações</Title>
      </TitleContainer>
      
      <SubTitleContainer>
        <SubTitle>Estudantes</SubTitle>
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
                {item.icon}
            </FlexEnd>
          </ButtonBox>
        ))}
       
      </InstructorList>
       
    </Container> 

    <Footer>  
     <MenuBarAdm/>
    </Footer>
       
    </View>
  );
};
