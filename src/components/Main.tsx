import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Buttons from './Buttons'
import Display from './Display';


const Main = ( ) => {


  return (
    <View style={styles.container}>
      
      <Display/>
<Buttons />

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

  backgroundColor: "white", 

  }
 

});

export default Main;