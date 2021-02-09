import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, CheckBox } from 'react-native';
import Title from '../components/Title.js';
import Subtitle from '../components/Subtitle.js';
import Input from '../components/Input.js';
import Btn from '../components/Btn.js';



export default function ForgotPassword() {

    const [count, setCount]= useState(0);
    console.log('count------------->',count);

    const Header=()=>( <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
            <Text style={{fontSize:18, color:'#1E90FF'}}>
                <Text style={{fontWeight:'bold', fontSize:30, alignSelf:'flex-start'}}>&lt; </Text>
                 Sign in
            </Text>
        </View>
        <View style={styles.headerContent}>
            <Text style={{fontSize:18, fontWeight:'bold',marginLeft:20}}>Password reset</Text>
        </View>
        
      </View>);
  
    return (
      <>
        <View style={styles.container}>
          <Header/>
          <Title title={"Forgot password?"} />
          <Subtitle value={'Mel ea numquam officiendi appellantur, eu'} />
          <Subtitle value={'vix reque inermis propriae, animal scaevola.'} />
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
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
  
    },

    inputContainer:{
      marginTop:40,
      flexDirection:'column'
    },
    
    headerContainer:{

        flexDirection:'row',
        backgroundColor:'#DEDEDE',
        height:80,
        width:'100%',
        alignItems:'flex-start',
        borderBottomWidth:0.5,
        borderBottomColor:'#8899A6',
        marginBottom:70


    },
    headerContent:{
        margin:8,
        alignSelf:'flex-end',
    },
    btnContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:100,
        marginTop:20,
    }
    
   
});
  