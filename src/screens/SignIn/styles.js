import React from "react";
import styled from "styled-components/native";
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#fff",
    margin: 35,
  },
  header: {
    height: 60,
  },
  input: {
    height: 60,
    marginVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 14,
    borderColor: "green",
    backgroundColor: "#f2f2f2",
    color: "#333",
  }, 
  text:{
      fontSize: 17,
      color: "#fafdfb",
  },
  buttonLogin: {
    height: 52,
    marginVertical: 8,
    marginTop: 75,
    backgroundColor: "#99E9E6",
    color: "#fafdfb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  buttonSignUp: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C5CFDA",
    marginVertical: 8,
    color: "#fafdfb",
    borderRadius: 14,
  },
  footer: {
    marginTop: 30,
    color: "#88FDD0",
    textAlign: "center",
    fontWeight: "bold",
  },
});
