import styled from 'styled-components'

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

export const Label = styled.Text`
  margin: 10px 0;
  font-size: 12px;
  margin-left: 10px;
  font-weight: bold;
  text-align: left;
  color: #484848;
 
`

export const RadioText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #484848;
 
`

export const VideoBox = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 18px;
  margin-top: 10px;
  padding: 20px 0;
  background-color: #C5CFDA;

  align-items: center;
  justify-content: center;
`

export const Box = styled.View`
  height: 80px;
  margin-bottom: 15px;
  padding: 20px 0;
`

export const TagsBox = styled.View`
  height: 80px;
  margin-bottom: 15px;
  padding: 20px 0;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`


export const Tag = styled.View`
  border-radius: 24px;
  padding: 6px 12px;
  background-color: #99E9E6;
  margin-bottom: 10px;
`

export const TagText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #FFFFFF;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`


