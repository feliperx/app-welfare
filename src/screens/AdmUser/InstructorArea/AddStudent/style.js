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

export const Container = styled.ScrollView `
  flex: 26;
  width: 100%;
  padding: 0 10px;
  background-color: #FFFFFF;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`

export const TitleContainer = styled.View`
  width: 100%;
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

