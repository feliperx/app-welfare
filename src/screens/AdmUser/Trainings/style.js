import { StyleSheet } from "react-native";

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
    marginBottom: 50,
    marginTop: 50,
  }, 
  title: {
    flex: 1,  
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
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
