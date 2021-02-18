import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Btn=({title, onSubmit})=>(<TouchableOpacity onPress={() => onSubmit()}  style={styles.btnContainer}><View style={styles.btn}>
  <Text  style={styles.text}>{title}</Text></View></TouchableOpacity>
 );
export default Btn;
const styles = StyleSheet.create({
 
  btnContainer:{
    marginTop:verticalScale(206),
    alignItems:'center'

  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:verticalScale(17),
    // width:343,
    width:width-40,
    maxWidth: 400,
    height:verticalScale(56),
    minHeight: verticalScale(40),
    borderRadius:verticalScale(14),
    backgroundColor:'#007AFF',
  },
  text:{
    color:'#fff',
    fontSize:17,
    textAlign:'center',
    fontWeight:'bold'
  }

});
