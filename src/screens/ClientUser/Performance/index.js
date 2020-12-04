import React from "react";
import { 
  Container,
  Footer, 
  InstructorList, 
  Title, 
  SubTitle, 
  Description, 
  TitleContainer, 
  SubTitleContainer,
  BoxContent,
  Text,
  TextDescription
} from './style'

import perfil from '../../../images/perfil.png'
import grafico from '../../../images/grafico.png'

import Header from "../../../components/Header";
import MenuBar from "../../../components/MenuBar/menuBarCli"; // Importando o MenuBar

export default function Performance() {

  return (
    <Container>
      <Header avatar={perfil} name="Robert Fox" />

      <TitleContainer>
        <Title>Meu Gráfico</Title>
      </TitleContainer>
      
      <SubTitleContainer>
        <SubTitle>Perda de Peso</SubTitle>
        <Description>Tempo de exercício</Description>
      </SubTitleContainer>

      <InstructorList source={grafico} />

      <BoxContent>
        <Text>24/02/2020</Text>
        <TextDescription>2h e 30 minutos</TextDescription>
      </BoxContent>
      <BoxContent>
        <Text>22/02/2020</Text>
        <TextDescription>2h e 10 minutos</TextDescription>
      </BoxContent>

      <Footer>
        <MenuBar/>
      </Footer>
     
    </Container>
  );
};
