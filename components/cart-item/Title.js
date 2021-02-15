import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import { verticalScale } from '../../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Title = ({title}) => (
  <Text style={ styles.title }>{title}</Text>
  );
export default Title;
const styles = StyleSheet.create({

    titleCotainer:{
      // marginTop:verticalScale(35),
    },
    title:{
      height:verticalScale(18), 
      fontSize: 16,
      fontStyle:'normal',
      fontWeight:'500',
      letterSpacing:-0.18,
      lineHeight:verticalScale(17.6)

    },
   
  
  });
  