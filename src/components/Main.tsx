import React, {useState} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Buttons from './Buttons'
import Display from './Display';



const Main = ( {theme, setTheme}:any) => {

  const  [display, setDisplay] = useState({record:[], display:"", operator:""})

  
  return (
    <View style={theme ? styles.container : styles.containerDark }>
      
      <Display stateDisplay={display}  stateTheme={theme}/>
<Buttons setStateDisplay={setDisplay} stateTheme={theme} setStateTheme={setTheme} stateDisplay={display}/>

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