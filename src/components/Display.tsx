import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { darkTheme, ligthTheme } from "./toolsFuctions/themeColors";

const Display = ({ stateDisplay, stateTheme }: any) => {
  return (
    <View style={stateTheme ? styles.container : styles.containerDark}>
     
        <Text style={stateTheme ? styles.textRecord : styles.textDark}>
          {stateDisplay.record.length ? stateDisplay.record : "0"}
        </Text>
        <Text style={stateTheme ? styles.text : styles.textDark}>
          ={stateDisplay.display ? stateDisplay.display : "0"}
        </Text>
    
    
     
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
    borderBottomWidth: 1,
    flexWrap: "wrap"
  },


  text: {
    color: ligthTheme.textColorDisplay,
    width: "100%",
    fontSize: 30,
    backgroundColor:"red",
    textAlign: "right",
    marginTop: "10%",
   
    
    
  },
  textRecord: {
    backgroundColor:"yellow",
    color: ligthTheme.textColorDisplay,
    width: "100%",
    alignSelf: "flex-end",
    

    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 20,
    marginTop: "40%"
    
   
  },
  containerDark: {
    flexDirection: "row",
    backgroundColor: darkTheme.backgroundColorButtons,
    width: "100%",
    height: "40%",
    borderBottomColor: darkTheme.textColorDisplay,
    borderBottomWidth: 1,
 
  },
  textDark: {
    color: darkTheme.textColorDisplay,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 15,
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 40,
    flexWrap: "wrap",
  },
  textDarkRecord: {
    color: darkTheme.textColorDisplay,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 15,
    justifyContent: "flex-end",
    textAlign: "right",
    fontSize: 40,
    flexWrap: "wrap",
  },
});
export default Display;
