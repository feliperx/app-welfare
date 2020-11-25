import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({

  menuBar: { 
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    height: 70,
    padding: 30,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#C5CFDA",
    color: "#fafdfb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
  },

  buttonMenuBar: {
    fontSize: 24,
    color: "#fff",
  }, 

  selectedButton:{
    fontSize: 24,
    color: "#99E9E6"
  },
});
