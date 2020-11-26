import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",

  },
  container: {
    flex: 1, 
    margin: 24, 
    marginTop: 0,
    marginBottom: 90, 
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
    borderRadius: 20, 

  }, 
  nameExercise: {
    marginTop: 5,
  },
});
