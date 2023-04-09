import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { darkTheme, ligthTheme } from "./toolsFuctions/themeColors";

const Display = ({displayState, stateTheme}:any) => {
  return (
    <View style={stateTheme  ?  styles.container : styles.containerDark}>
      <Text style={stateTheme  ?  styles.text : styles.textDark}>{displayState[0]}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: ligthTheme.backgroundColorButtons,
width: "100%",
height: "40%",
borderBottomColor: ligthTheme.backgroundColorButton,
borderBottomWidth: 1


  },
  text: {
    color: ligthTheme.textColorDisplay,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom:25,
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 40,
    flexWrap:"wrap",

  },
  containerDark: {
    flexDirection: "row",
    backgroundColor: darkTheme.backgroundColorButtons,
width: "100%",
height: "40%",
borderBottomColor: darkTheme.textColorDisplay,
borderBottomWidth: 1


  },
  textDark: {
    color: darkTheme.textColorDisplay,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom:25,
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 40,
    flexWrap:"wrap",

  },
});
export default Display;
