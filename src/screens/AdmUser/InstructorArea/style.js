import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sideBarTop: {
    marginTop: 38,
  },
  text: {
    fontSize: 17,
    color: "#333",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    margin: 38,
  },
  title: {
    width: 300,
    marginBottom: 50,
    marginTop: 50,
    textAlign: "left",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#484848",
  },
  containerView: {
    flex: 1,
    alignItems: "stretch",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#88FDD0",
  },
  option: {
    width: width / 2 - 19,
  },
  optionSelected: {
    borderBottomWidth: 10,
    borderBottomColor: "#88FDD0",
  },
  sideBarBottom: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    padding: 30,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#C5CFDA",
    color: "#fafdfb",
    borderRadius: 20,
  },
  buttonSideBarBottom: {
    fontSize: 17,
    color: "#fff",
  },

  card: {
    width: 100,
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    paddingTop: 20,
  },

  buttonAdd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 8
  },
});
