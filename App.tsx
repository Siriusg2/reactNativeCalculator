import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Switch, Button } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  

  return (
    <View style={styles.container} >
      <StatusBar style="auto" />


   
  
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    alignItems: "center",
    justifyContent: "center",
  },
 
});
