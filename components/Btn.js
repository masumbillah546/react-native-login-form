import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Btn=({title, setcount})=>(<View style={styles.btnContainer}><TouchableOpacity onPress={() => setcount(x => x + 1)} style={styles.btn}>
  <Text  style={styles.text}>{title}</Text></TouchableOpacity></View>
 );
export default Btn;
const styles = StyleSheet.create({
 
  btnContainer:{
    marginTop:verticalScale(206),

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
    // width:311,
    height:22,
    color:'#fff',
    fontSize:17,
    textAlign:'center',
    fontWeight:600
  }

});
