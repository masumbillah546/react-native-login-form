import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';
import { verticalScale } from '../../Utils/index.js';
import { AntDesign } from '@expo/vector-icons';

const { height, width} = Dimensions.get('window');

const Quantity=({increment, decrement})=>{

const [quantity, setQuantity]= useState(1);

  return(

<View style={styles.btnContainer}>
  <TouchableOpacity onPress={() => setQuantity(quantity - 1)} style={styles.btn}>
    <Text  style={styles.text}>{decrement}</Text>
  </TouchableOpacity>
  <View style={styles.quantity}>
    <Text style={styles.text}>{quantity}</Text>
  </View>
  <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.btn}>
    <Text  style={styles.text}>{increment}</Text>
  </TouchableOpacity>
  <TouchableOpacity  style={styles.btn2}>   
    <AntDesign style={styles.delete} name="delete" />
  </TouchableOpacity>
</View>
   )
};
export default Quantity;

const styles = StyleSheet.create({
 
  btnContainer:{
    flexDirection:'row',
    height:verticalScale(32),
    width:verticalScale(96),
    marginTop:verticalScale(8)
    

  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    // width:verticalScale(32),
    // height:verticalScale(32),
    width:32,
    height:32,
    backgroundColor:'#F5F5F5',
    borderRadius:2
  },
  btn2:{
    justifyContent:'center',
    // width:verticalScale(32),
    // height:verticalScale(32),
    width:32,
    height:32,
    backgroundColor:'#F5F5F5',
    marginLeft:5,
    borderRadius:2
  },
  text:{
    color:'#BBBBBB',
    fontSize:14,
    textAlign:'center',
    fontWeight:600,
    // width:verticalScale(32),
    width:32
  },
  delete:{
    color:'#BBBBBB',
    textAlign:'center',
    fontWeight:600,
    fontSize:16,
  },
  quantity:{
    backgroundColor:'#F5F5F5',
    textAlign:'center',
    justifyContent:'center',
    // height:verticalScale(32),
    height:32,
    color:'#BBBBBB'

  }

});
