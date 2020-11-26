import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#fff",
    margin: 35,
  },
 
  text:{
      fontSize: 17,
      color: "#fafdfb",
  },
  buttonLogin: {
    height: 52,
    marginVertical: 8,

    backgroundColor: "#99E9E6",
    color: "#fafdfb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  footer: {
    margin: 30,
    color: "#C5CFDA",
    textAlign: "center",
    fontWeight: "bold",
  },
});
