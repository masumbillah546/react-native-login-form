import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';

const Logo = ({ url }) => (<View style={styles.logoContainer}>

    <Image style={{
      width: 50,
      height: 50,
  
    }}
      source={{
        uri: url,
      }} />
  </View>)
  
export default Logo;

const styles = StyleSheet.create({

  logoContainer:{
    padding:40
  }, 

});
