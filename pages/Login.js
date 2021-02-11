import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Logo from '../components/Logo.js';
import Title from '../components/Title.js';
import Subtitle from '../components/Subtitle.js';
import Input from '../components/Input.js';
import Password from '../components/Password.js';
import Btn from '../components/Btn.js';
import Footer from '../components/Footer.js';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

export default function Login() {

    const [count, setCount]= useState(0);
    console.log('count------------->',verticalScale(59));
  
    return (
      <>
        <View style={styles.container}>
          <Logo url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
          <Title title={"Login"} />
          <Subtitle value={'Welcome back,\n Signin to cotinue etiam tecimates sed ad'} />
          <View style={styles.inputContainer}>
            <Input placeholder={'Email'}/>
            <Password placeholder={'Password'}/>         
          </View>
          <View style={styles.btnContainer}>
            <Btn setcount={setCount} title={'Sign in'}/>
            <Footer text1={'Don\'t have an account?'} text2={' Create account'}/>
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
      marginTop: verticalScale(59),
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      
    },
    btnContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
   
});
  