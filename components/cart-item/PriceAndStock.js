import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity,Dimensions } from 'react-native';
import { verticalScale } from '../../Utils/index.js';

const { height, width} = Dimensions.get('window');

const PriceAndStock = ({price,title}) => (<View style={ styles.titleCotainer}>
  <Text style={ styles.price }>{price}</Text>
  <Text style={styles.title}>{title}</Text>
  </View>);
export default PriceAndStock;
const styles = StyleSheet.create({

    titleCotainer:{
      // marginTop:verticalScale(35),
      flexDirection:'row',
      marginTop:verticalScale(8)
    },
    price:{
      
      fontSize: 14,
      fontStyle:'normal',
      fontWeight: '400',
      textAlign:'center',
      letterSpacing:-0.16,
      lineHeight:verticalScale(15.4)

    },
    title:{
      color:'#8688BC',
      fontSize: 14,
      fontStyle:'normal',
      fontWeight: 'bold',
      textAlign:'center',
      letterSpacing:-0.16,
      lineHeight:verticalScale(15.4)
    }
   
  
  });
  