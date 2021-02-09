import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';

const Title = ({title}) => (<Text style={ styles.title}>{title}</Text>);
export default Title;
const styles = StyleSheet.create({

    title:{
      paddingBottom:20,
      fontSize: 30,
      fontWeight: 'bold',
    },
  
  });
  