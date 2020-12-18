import styled from 'styled-components'


export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  background-color: #FFFFFF;
`

export const Space = styled.SafeAreaView`
  flex: ${props => props.flex};
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 12px 30px 0 30px;

`


export const Container = styled.SafeAreaView`
  flex: 26;
  width: 100%;
  padding: 0 10px;
  background-color: #FFFFFF;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`

export const Footer = styled.View`
  flex: 2;
`

export const InstructoGraphic = styled.ImageBackground`
  flex: 3;
  width: 100%;
  margin-bottom: 10px;
`

export const TitleContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  margin-bottom: 10px;
`

export const ChooseTraining = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  margin-bottom: 8px;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 8px 0;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #484848;
`

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #263238;
`


export const BoxContent = styled.View`
  padding: 15px;
  border-radius: 18px;
  background-color: #F4F4F4;

  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.Text`
   font-size: 12px;
  font-weight: 700;
  text-align: left;
  color: #484848;
`

export const TextDescription = styled.Text`
  font-size: 12px;
  font-weight: 700;
  text-align: right;
  color: #C4C4C4;
`


