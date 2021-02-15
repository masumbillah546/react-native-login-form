import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity ,Dimensions} from 'react-native';
import { verticalScale } from '../Utils';

const { height, width} = Dimensions.get('window');

const Password = ({placeholder})=>(<View style={styles.passwordContainer}>
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    defaultValue={''}
    
  />
   <Text style={styles.forgotPass}>Forgot password?</Text>
  </View> 
  );
export default Password;
const styles = StyleSheet.create({
  
  
  passwordContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:width-40,
    maxWidth:400,
    borderBottomColor:'#DEDEDE',
    borderBottomWidth:1,
  },
  input:{
    height: verticalScale(60),
    // minWidth:30,
    width:'50%',
    placeholderTextColor:'rgba(60, 60, 67, 0.3)',
    fontSize:17,   
  },
  forgotPass:{
    color:'#1E90FF',
    fontWeight:'bold',
    fontSize:13,
  }

});
