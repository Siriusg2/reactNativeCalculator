import React, {useState} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Buttons from './Buttons'
import Display from './Display';



const Main = ( ) => {
  const [theme, setTheme] = useState(false);
  const  [display, setDisplay] = useState("0")
  const  [record, setRecord] = useState([])
  
  return (
    <View style={theme ? styles.container : styles.containerDark }>
      
      <Display stateDisplay={display} recdordState = {record} stateTheme={theme}/>
<Buttons setStateDisplay={setDisplay} stateTheme={theme} setStateTheme={setTheme} stateDisplay={display} recordState = {record} setRecordState = {setRecord}/>

    </View>
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 2,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  flexWrap: 'wrap',

  backgroundColor:  "yellow", 

  },
 containerDark: {
  flex: 2,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  flexWrap: 'wrap',

  backgroundColor:  "yellow", 

  },
 

});

export default Main;