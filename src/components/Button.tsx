import React from "react";
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import handlePress from "./toolsFuctions/toolFunctions";

const Button = ({ value }: any) => {
  return (
    <View style={styles.box}>
      <TouchableNativeFeedback   onPress={() => handlePress(value, Alert.alert)}>
        <Text style={styles.text} >{value}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "24%",
    height: "75%",
  
    alignContent: "center",
    textAlign: "center",
    borderRadius: 100,
    backgroundColor: "rgb(0, 210, 100)",
  },
  text:{
   alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  
    textAlign: "center",
       color: "white",
       fontSize: 25,
       
  }
});

export default Button;
