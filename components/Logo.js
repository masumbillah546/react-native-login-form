import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from '../Utils/index.js';

const Logo = ({ url }) => (<View style={styles.logoContainer}>

    <Image style={{
      width: moderateScale(37, 0.1),
      height: moderateScale(44, 0.1),
      // width:37,
      // height:44
  
    }}
      source={
       url
      } />
  </View>)
  
export default Logo;

const styles = StyleSheet.create({

  logoContainer:{
    marginTop: verticalScale(59),
    justifyContent: 'center',
  }, 

});
