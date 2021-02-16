import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';
import { verticalScale } from '../Utils';

const { height, width} = Dimensions.get('window');

const Password2 = ({placeholder})=>(
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor='rgba(60, 60, 67, 0.3)'
    defaultValue={''}
    
  />
 
  );
export default Password2;
const styles = StyleSheet.create({
  
  input:{
    height: verticalScale(60),
    width:width-40,
    maxWidth:400,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    fontSize:17,
    
  },


});
