import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { verticalScale } from '../Utils/index.js';


const Footer=({text1, text2})=>(<View style={styles.footerContainer}>
  <Text style={styles.text1}>{text1}</Text>
  <Text style={styles.text2}>{text2}</Text>
</View>)
export default Footer;

const styles = StyleSheet.create({
  footerContainer:{
    marginTop:verticalScale(32),
    marginBottom:verticalScale(200),
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  text1:{
    color:'#8E8E93',
    fontSize:16,
    textAlign:'center'
  },
  text2:{
    color:'#1E90FF',
    fontWeight:'600',
    fontSize:15,
    // textAlign:'center'
  }
});
