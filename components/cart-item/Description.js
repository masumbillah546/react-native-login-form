import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import { verticalScale } from '../../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Description = ({title}) => (<View style={ styles.titleCotainer}>
  <Text style={ styles.title }>{title}</Text>
  </View>);
export default Description;
const styles = StyleSheet.create({

    titleCotainer:{
      // marginTop:verticalScale(35),
      marginTop:verticalScale(8)
    },
    title:{
      
      fontSize: 13,
      fontStyle:'normal',
      fontWeight: '400',
      color:'#BBBBBB',
      lineHeight:verticalScale(14.3),

    },
   
  
  });
  