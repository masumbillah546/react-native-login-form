import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from '../../Utils/index.js';

const ProductImage = ({ url }) => (<Image style={styles.image} source={url} />);
  
export default ProductImage;

const styles = StyleSheet.create({

  image:{
    width:moderateScale(120),
    height:moderateScale(110),
    // width:120,
    // height:110
  }, 

});
