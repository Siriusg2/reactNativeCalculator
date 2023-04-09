import React, {useState} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Buttons from './Buttons'
import Display from './Display';



const Main = ( ) => {
  const [theme, setTheme] = useState(false);
  const  [display, setDisplay] = useState([0])
  
  return (
    <View style={theme ? styles.container : styles.containerDark }>
      
      <Display displayState={display} stateTheme={theme}/>
<Buttons setStateDisplay={setDisplay} stateTheme={theme} setStateTheme={setTheme}/>

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