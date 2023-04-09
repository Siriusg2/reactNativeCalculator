import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Display = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
width: "100%",
height: "40%",
borderBottomColor: "red",
borderBottomWidth: 1


  },
  text: {
    color: "red",
    width: "100%",
    alignSelf: "flex-end",
    marginBottom:25,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    flexWrap:"wrap"
  },
});
export default Display;
