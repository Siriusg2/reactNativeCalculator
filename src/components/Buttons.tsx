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
import { ligthTheme, darkTheme } from "./toolsFuctions/themeColors";

const Buttons = ({setStateDisplay, stateTheme, setStateTheme, stateDisplay}:any) => {
  
  return (
    <View style={stateTheme   ? styles.container : styles.containerDark }>
       <View style={stateTheme  ? styles.row : styles.rowDark }>
        <Button value={!stateTheme  ? "☼" : "☽"}  stateTheme={stateTheme}setStateTheme={setStateTheme}/>
        <Button value={"+/-"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay} />
        <Button value={"%"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay} />
        <Button value={"÷"}setStateDisplay={setStateDisplay}  stateTheme={stateTheme} stateDisplay={stateDisplay} />
      </View>
      <View style={stateTheme ? styles.row : styles.rowDark }>
        <Button value={"7"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay} />
        <Button value={"8"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay} />
        <Button value={"9"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay}/>
        <Button value={"x"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
      </View>
       <View style={stateTheme   ? styles.row : styles.rowDark }>
        <Button value={"4"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"5"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"6"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"-"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay}/>
      </View>
       <View style={stateTheme   ? styles.row : styles.rowDark }>
        <Button value={"1"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"2"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"3"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay}/>
        <Button value={"+"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
      </View>
       <View style={stateTheme  ? styles.row : styles.rowDark }>
        <Button value={"AC"} setStateDisplay={setStateDisplay} stateTheme={stateTheme} stateDisplay={stateDisplay}/>
        <Button value={"0"} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"."} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
        <Button value={"="} setStateDisplay={setStateDisplay} stateTheme={stateTheme}stateDisplay={stateDisplay}/>
  
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
    backgroundColor: ligthTheme.backgroundColorButtons,
    flexDirection: "column",
  
  
alignItems:"center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around", 
    backgroundColor: ligthTheme.backgroundColorButtons,
    width: "100%",
    height:"20%"
    
   
  },
  containerDark: {
    flex: 4,
    marginHorizontal: "auto",
    width: "100%",
    height: "100%",
    backgroundColor: darkTheme.backgroundColorButtons,
    flexDirection: "column",
  
  
alignItems:"center"
  },
  rowDark: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around", 
    backgroundColor:darkTheme.backgroundColorButtons,
    width: "100%",
    height:"20%"
    
   
  },
});

export default Buttons;
