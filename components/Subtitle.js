import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';

const SubTitle =({value})=>(<Text style={styles.subtitle}>{value}</Text>
    );
export default SubTitle;
const styles = StyleSheet.create({

    subtitle:{
      color:'#8899A6',
      fontSize:17
    },

  
  });
  