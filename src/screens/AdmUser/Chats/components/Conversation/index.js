import React, { useState } from "react";
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Container, Header, Image, StrongText, List, Text, TextContainer, Background, TextingBox, Input, IconBox, MessageBox, MessageText, MessageTitle, Footer} from './style'

import background from '../../../../../images/background.png'

export default function instructor({ instructor, setInstructor}) {
  const [ text, setText ] = useState("")
  const [ margin, setMargin ] = useState(0)
  const [ messages, setMessages] = useState([])
  
  function sendMessage() {
    setMessages([text, ...messages])
    setText("")
  }

  const renderItem = ({ item }) => (
    <MessageBox key={item}>
      <MessageTitle>{`Para ${instructor.name}`}</MessageTitle>
      <MessageText>{item}</MessageText>
    </MessageBox>
  )

  return (
    <Container behavior="height">
      <Header>
        <AntDesign onPress={() => setInstructor(null)} name="arrowleft" size={24} color="#FFFFFF" />
        <Image source={instructor.avatar} />
        <TextContainer>
          <StrongText>{instructor.name}</StrongText>
          <Text>Online</Text>
        </TextContainer>
      </Header>
      <Background source={background} >
        <List 
          data={messages}
          horizontal={false}
          keyExtractor={item => item}
          renderItem={renderItem}
        />
      </Background>
      <Footer source={background}>  
        <TextingBox>
            <Input spacement={margin} onFocus={() => setMargin(30)} onBlur={() => setMargin(0)} underlineColorAndroid="transparent" value={text} onChangeText={setText} placeholder="Escreva a mensagem" placeholderTextColor="#FFFFFF" />
            <IconBox spacement={margin} activeOpacity={0.8}>
              <FontAwesome name="microphone" size={24} color="white" />
            </IconBox>
            <IconBox spacement={margin} onPress={sendMessage} activeOpacity={0.8}>
              <AntDesign name="arrowright" size={24} color="white" />
            </IconBox>
        </TextingBox>
      </Footer>
    </Container>
  );
};
