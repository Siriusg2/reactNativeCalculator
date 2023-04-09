import React, { useState } from "react";

import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  Alert,
  Switch,
} from "react-native";
import handlePress from "./toolsFuctions/toolFunctions";
import Button from "./Button";

const Buttons = () => {
  const [theme, setTheme] = useState("ligth");
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button value={"AC"}></Button>
        <Button value={"+/-"}></Button>
        <Button value={"%"}></Button>
        <Button value={"÷"}></Button>
      </View>
      <View style={styles.row}>
        <Button value={"7"}></Button>
        <Button value={"8"}></Button>
        <Button value={"9"}></Button>
        <Button value={"x"}></Button>
      </View>
      <View style={styles.row}>
        <Button value={"4"}></Button>
        <Button value={"5"}></Button>
        <Button value={"6"}></Button>
        <Button value={"-"}></Button>
      </View>
      <View style={styles.row}>
        <Button value={"1"}></Button>
        <Button value={"2"}></Button>
        <Button value={"3"}></Button>
        <Button value={"+"}></Button>
      </View>
      <View style={styles.row}>
        <Button value={"0"}></Button>
        <Button value={"."}></Button>
        <Button value={"="}></Button>
      <Switch
        value={theme === "ligth"}
        onValueChange={() => {
          setTheme(theme === "ligth" ? "dark" : "ligth");
        }}
      />
      </View>

    
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
  
  
alignItems:"center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around", 
    backgroundColor:"#fff",
    width: "100%",
    height:"20%"
    
   
  },
});

export default Buttons;
