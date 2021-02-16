import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Title = ({title}) => (<View style={ styles.titleCotainer}>
  <Text style={ styles.title}>{title}</Text>
  </View>);
export default Title;
const styles = StyleSheet.create({

    titleCotainer:{
      height:verticalScale(41),
      marginTop:verticalScale(35),
    },
    title:{
      
      // fontSize: 'min(10vw, 34px)',
      fontSize:34,
      fontStyle:'normal',
      fontWeight: 'bold',
      textAlign:'center',
      letterSpacing:0.374,
      lineHeight:verticalScale(41)

    },
   
  
  });
  