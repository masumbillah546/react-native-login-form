import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { verticalScale } from '../Utils/index.js';

const SubTitle =({value})=>(<View style={ styles.titleCotainer}><Text style={ styles.title}>{value}</Text></View>
    );
export default SubTitle;
const styles = StyleSheet.create({

  titleCotainer:{
    height:44,
  },
  title:{
    marginTop:verticalScale(16),
    fontSize: 17,
    fontStyle:'normal',
    fontWeight: 'normal',
    textAlign:'center',
    letterSpacing:-0.408,
    lineHeight:22,
    color:'rgba(60, 60, 67, 0.6)'

  },

  
  });
  