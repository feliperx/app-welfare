import styled from 'styled-components'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding-top: 25px;
`

export const Header = styled.View`
  width: 100%;
  height: 75px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #99E9E6;
  padding: 0 20px;
`

export const Background = styled.ImageBackground`
  flex: 20;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Footer = styled.ImageBackground`
  flex: 2;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 10px;
`

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  margin: 0 15px;
`

export const TextContainer = styled.View`
  align-items: center;
  justify-content: space-around;
`

export const StrongText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
`

export const Text = styled.Text`
  font-size: 12px;
  text-align: left;
  font-weight: normal;
  color: #FFFFFF;
`

export const TextingBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
`

export const Input = styled.TextInput`
  width: 60%;
  height: 50px;
  border-radius: 20px;
  margin-top: ${props => `-${props.spacement}px`};
  padding: 0 15px;
  font-size: 14px;
  font-weight: normal;
  background-color: #C5CFDA;
  color: #FFFFFF;
`

export const IconBox = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: normal;
  background-color: #C5CFDA;
  color: #FFFFFF;
  margin-top: ${props => `-${props.spacement}px`};
  align-items: center;
  justify-content: center;
`

export const MessageBox = styled.View`
  width: 200px;
  height: 70px;
  border-radius: 20px;
  padding: 10px 10px;
  margin-bottom: 15px;
  background-color: #FFFFFF;
  align-items: flex-start;
  justify-content: space-around;
`

export const MessageTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #484848;
`

export const MessageText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color:  #484848;
`

export const List = styled.FlatList`
  width: 100%;

  padding: 15px;
  margin-bottom: 15px;
`
