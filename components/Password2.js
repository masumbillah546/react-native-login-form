import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';


const Password2 = ({placeholder})=>(
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    defaultValue={''}
    
  />
 
  );
export default Password2;
const styles = StyleSheet.create({
  
  input:{
    height: 45,
    width: 320,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    placeholderTextColor:'#8899A6',
    fontSize:15,
    
  },


});
