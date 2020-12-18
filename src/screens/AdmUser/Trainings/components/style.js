import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex:1,  
  },
  title: {
    fontSize: 16,
    color: "#B2E0DE", 
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerView: { 
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

});
