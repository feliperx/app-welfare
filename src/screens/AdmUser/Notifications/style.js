import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  padding: 15px;
`

export const Footer = styled.View`
  flex: 1;
`

export const InstructorList = styled.View`
  flex: 6;
  padding: 0 20px;
`

export const TitleContainer = styled.View`
  flex: 3;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
  padding: 0 20px;
`

export const SubTitleContainer = styled.View`
  width: 100%;
  flex: 2;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  margin: 20px 0;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #484848;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #484848;
`

export const ButtonBox = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #d9d9d9;
  margin-bottom: 12px;
`

export const FlexStart = styled.View`
  width: 50%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const TextContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 15px;
`

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #484848;
`

export const WeakText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-right: 19px;
  color: #484848;
`

export const FlexEnd = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;


`