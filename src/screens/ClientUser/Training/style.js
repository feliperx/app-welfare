import { StyleSheet } from "react-native"; 
import styled from 'styled-components';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    

  },
  container: {
    flex: 1, 
    margin: 38, 
    marginTop: 0,
    marginBottom: 10, 
    fontFamily: "Roboto",
    fontStyle: "normal", 
    color: "#484848"
  },
  containerTop: {
    flexDirection: "row",
  }, 
  containerWeight: {
    flex:1,
    alignItems:"center", 
    justifyContent:"center",
  },
  title: {
    flex:1,
    marginBottom: 50,
    marginTop: 50,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#484848",
  }, 
  boxInputWeight: { 
    alignItems:"center", 
    justifyContent:"flex-start",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#F4F4F4", 
    borderRadius: 18, 
    paddingHorizontal: 20,
  }, 
  inputWeight: {
    flex: 1,
    fontSize: 10, 
    color: "#484848",
  },
  containerView: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent:"space-between"

    // backgroundColor: "red",
  },
  exercisesView: { 
    width: 144,
    height: 114,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20, 
    
  },
  exercise: { 
    flex: 1, 
    resizeMode: "center",
    overflow: "hidden", 
    width: "100%",
    height: 114,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32, 

  }, 
  nameExercise: {
    marginTop: 5,
    fontWeight: "bold",
  }, 

  footer: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 90,  
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#F4F4F4", 
    borderRadius: 18, 
    padding: 19,
    fontSize: 12, 
    fontFamily: "Roboto",
    fontStyle: "normal", 
    color: "#484848"
  },  
  footerText: { 
    fontWeight: "bold",

  }, 

  footerTotalTime: { 
    color: "#C4C4C4", 
    alignItems: "flex-end"

  },

});
