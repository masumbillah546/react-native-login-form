import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity , Dimensions} from 'react-native';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

const Input = ({placeholder})=>(
<TextInput
  style={styles.input}
  placeholder={placeholder}
  defaultValue={''}   
/>
);
export default Input;
const styles = StyleSheet.create({
  input:{
    height: verticalScale(60),
    width:width-40,
    maxWidth:400,
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    placeholderTextColor:'rgba(60, 60, 67, 0.3)',
    fontSize:17,
        
  },

});
