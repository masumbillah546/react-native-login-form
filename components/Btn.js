import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';

const Btn=({title, setcount})=>(<TouchableOpacity onPress={() => setcount(x => x + 1)} style={styles.btnContainer}>
  <Text  style={{color:'#fff',fontSize:18, fontWeight:'bold'}}>{title}</Text></TouchableOpacity>
 );
export default Btn;
const styles = StyleSheet.create({
 
  btnContainer:{
    
    justifyContent:'center',
    width:350,
    height:50,
    borderRadius:15,
    backgroundColor:'#1E90FF',
    alignItems:'center',
    
   
  }

});
