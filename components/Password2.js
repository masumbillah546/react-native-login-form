import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';

const { height, width} = Dimensions.get('window');

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
    height: 60,
    // width: 343,
    width:width-40,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    placeholderTextColor:'rgba(60, 60, 67, 0.3)',
    fontSize:17,
    
  },


});
