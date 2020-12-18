import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    margin: 38, 
    marginTop: 58,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#484848", 
  },
  containerTop: {
    flexDirection: "row", 
    marginBottom: 50,
  }, 
  containerStudent: {
    marginTop: 15, 
    flexDirection: "row", 
    width: 184, 
    backgroundColor: "#fff",
    padding: 10, 
    borderRadius: 24, 
    alignItems: "center", 
    justifyContent: "space-between",
  },
  nameStudent: {
    fontSize: 18, 
    marginLeft: 5,
  },
  
});
