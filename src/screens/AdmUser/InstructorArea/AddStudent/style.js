import styled from 'styled-components';
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

  subtitle: { 
    fontWeight: 'bold', 
    fontFamily: "Roboto", 
    fontSize: 14, 
    margin: 20, 
    color: "#484848",

  }, 

  containerAdd: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", 
  },
  buttomAdd: {
    color: "#88FDD0",
    fontSize: 24, 
    marginLeft: 7,
}, 
  containerWhatDays: { 
    flexDirection: "row", 
    marginRight: 20,

  }, 
})

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
export const TitleContainerContinuous = styled.View`
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

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #263238;
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
export const VideoBox = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 18px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 20px 0;
  text-align: center;
  background-color: #C5CFDA;

  align-items: center;
  justify-content: center;
`