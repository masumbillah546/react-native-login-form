import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';


const Footer=({text1, text2})=>(<View style={styles.footerContainer}>
  <Text style={styles.text1}>{text1}</Text>
  <Text style={styles.text2}>{text2}</Text>
</View>)
export default Footer;

const styles = StyleSheet.create({
  footerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingTop:30,
  },
  text1:{
    color:'#8899A6',
    fontSize:16
  },
  text2:{
    color:'#1E90FF',
    fontWeight:'bold',
    fontSize:16
  }
});
