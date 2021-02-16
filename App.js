import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import ForgotPassword from './pages/ForgotPassword.js';
import Cart from './pages/Cart.js';
import CreateCutomer from './pages/CreateCutomer.js';


export default function App() {

  const [count, setCount]= useState(0);
  console.log('count------------->',count);

  return (
    <>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ForgotPassword/> */}
      {/* <Cart/> */}
      <CreateCutomer/>
    </>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',

  },
  logo:{
    padding:40
  },
  title:{
    paddingBottom:20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle:{
    color:'#8899A6',
    fontSize:18
  },
  input:{
    height: 45,
    width: 320,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    placeholderTextColor:'#8899A6',
    fontSize:15,
    
    
  },
  input2:{
    height: 45,
    width: 213,
    placeholderTextColor:'#8899A6',
    fontSize:15,
    padding:0,
    margin:0
    
  },
  inputview:{
    marginTop:40,
    flexDirection:'column'
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
  btnContainer:{
    
    justifyContent:'center',
    width:350,
    height:50,
    borderRadius:15,
    backgroundColor:'#1E90FF',
    alignItems:'center',
   
  }

});
*/
