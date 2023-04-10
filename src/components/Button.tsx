import React from "react";
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import handlePress from "./toolsFuctions/toolFunctions";
import { ligthTheme, darkTheme } from "./toolsFuctions/themeColors";

const Button = ({ value, setStateDisplay, stateTheme, setStateTheme, stateDisplay, recordState,setRecordState  }: any) => {
  return (
    <View style={stateTheme ? styles.box : styles.boxDark}>
      <TouchableNativeFeedback
        onPress={
          value === "☼" || value === "☽"
            ? () => {
                stateTheme ? setStateTheme(false) : setStateTheme(true);
              }
            : () => handlePress(value, setStateDisplay, stateDisplay, recordState, setRecordState)
        }
      >
        <Text
          style={
            value !== "☼" && value !== "☽" ? styles.text : stateTheme ? styles.textSymbol : styles.textSymbolDark
          }
        >
          {value}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "20%",
    height: "75%",

    alignContent: "center",
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: ligthTheme.backgroundColorButton,
  },
  boxDark: {
    width: "20%",
    height: "75%",

    alignContent: "center",
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: darkTheme.backgroundColorButton,
  },
  text: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",

    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  textSymbol: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-1%",

    textAlign: "center",
    color: "white",
    fontSize: 45,
  },
  textSymbolDark: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-1%",

    textAlign: "center",
    color: "white",
    fontSize: 45,
  },
});

export default Button;
