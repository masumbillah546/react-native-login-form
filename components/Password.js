import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';


const Password = ({placeholder})=>(<View style={styles.password}>
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
  
  input:{
    height: 45,
    width: 213,
    placeholderTextColor:'#8899A6',
    fontSize:15,
    padding:0,
    margin:0
    
  },
  password:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:320,
    height:45,
    borderBottomColor:'#DEDEDE',
    borderBottomWidth:1,
  },
  forgotPass:{
    color:'#1E90FF',
    fontWeight:'bold',
    fontSize:12,
  }

});
