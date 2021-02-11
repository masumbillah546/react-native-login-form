import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/Header.js';
import Title from '../components/Title.js';
import Subtitle from '../components/Subtitle.js';
import Input from '../components/Input.js';
import Btn from '../components/Btn.js';
import { verticalScale } from '../Utils/index.js';


const { height, width} = Dimensions.get('window');

export default function ForgotPassword() {

    const [count, setCount]= useState(0);
    console.log('count------------->',count);

  
    return (
      <>
        <View style={styles.container}>
          <Header/>
          <Title title={"Forgot password?"} />
          <Subtitle value={'Mel ea numquam officiendi appellantur, eu \n vix reque inermis propriae, animal scaevola.'} />
          <View style={styles.inputContainer}>
            <Input placeholder={'Email'}/>      
          </View>
          <View style={styles.btnContainer}>
            <Btn setcount={setCount} title={'Continue'}/>
          </View>
          
        </View>
  
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height,
      width,
  
    },

    inputContainer:{
      marginTop:verticalScale(50),
      flexDirection:'column'
    },
    
    btnContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:verticalScale(100),
        marginTop:verticalScale(10),
    }
    
   
});
  