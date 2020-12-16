import React from "react";
import {
  ImageBackground,
} from "react-native"; 
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function BackgroundExercise({image}) {
  return (
    <ImageBackground
      source={image}
      style={{flex:1, resizeMode: "center", alignItems: "center",
      justifyContent: "center",}}
    >
      <LinearGradient
        colors={["rgba(136, 253, 208, 0.7)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
    </ImageBackground>
  );
};

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
    color: "#484848", 
  },
  containerTop: {
    flexDirection: "row",
  }, 
  containerWeight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    marginBottom: 50,
    marginTop: 50,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#484848",
  },
  boxInputWeight: {
    alignItems: "center",
    justifyContent: "flex-start",
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
    justifyContent: "space-between",

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
    color: "#484848",
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
    color: "#484848",
  },
  footerText: {
    fontWeight: "bold",
  },

  footerTotalTime: {
    color: "#C4C4C4",
    alignItems: "flex-end",
  }, 
  containerTopExercise: { 
    flex:1,
    marginTop:58, 
    
  }, 

  titleExercise: { 

    marginTop: 45, 
    fontSize: 24, 
    color: "#fff", 
    fontWeight: "bold",

  }, 

  totalTimeExercise: {
    height: 38, 
    width: 125,
    backgroundColor: "#F4F4F4", 
    marginTop: 45, 
    borderRadius: 18, 
    textAlign: "center", 
    padding: 6, 
    fontSize: 18,


  },

  chronometerContainer: {
    height: 163, 
    width: "100%", 
    marginBottom: 45,
    backgroundColor: "#F4F4F4", 
    borderRadius: 24, 
    padding: 10,  
    alignItems: "center", 
    justifyContent: "center", 
  }, 

  timeCurrent: {
    marginVertical: 25, 
    fontSize: 24,

  },

  buttomStart: { 
    marginBottom: 10,
    width: 70, 
    height: 70, 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 24,
    borderColor: "#99E9E6", 
    borderStyle: "solid", 
    borderWidth: 1,
  }
});
