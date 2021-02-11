import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, } from 'react-native';
// import Checkbox from 'expo-checkbox';
// import CheckBox from '@react-native-community/checkbox';
import { Button, CheckBox } from 'react-native-elements';

import Logo from '../components/Logo.js';
import Title from '../components/Title.js';
import Subtitle from '../components/Subtitle.js';
import Input from '../components/Input.js';
import Password from '../components/Password2.js';
import Btn from '../components/Btn.js';
import Footer from '../components/Footer.js';



export default function Login() {

    const [count, setCount]= useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    console.log('count------------->',toggleCheckBox);

  
    return (
      <>
        <View style={styles.container}>
          <Logo url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
          <Title title={"Create account"} />
          <Subtitle value={'Nec nihil affert partiendo ne, quo no iisque'} />
          <Subtitle value={'etiam tacimates sed conceptam.'} />
          <View style={styles.inputContainer}>
            <Input placeholder={'Name'}/>
            <Input placeholder={'Email'}/>
            <Password placeholder={'Password'}/> 
          </View>
          {/* <Button /> */}
          <View style={styles.checkboxContainer}>
          <CheckBox
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(preValue => !preValue)}
                color={'dodgerblue'}
            />
            <Text style={styles.label}>I agree with our <Text style={styles.termsConditions}>Terms</Text> and <Text style={styles.termsConditions}>Conditions</Text></Text>
          </View>
          <View style={styles.btnContainer}>
            <Btn setcount={setCount} title={'Create account'}/>
            <Footer text1={'Already have an account?'} text2={' Sign in'}/>
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
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 20,
        width:320,
        alignItems:'center'
      },
    checkbox: {
        color: "red",
        
    },
    label: {
        margin: 8,
        color:'#8899A6'
    },
    btnContainer:{
        flex:1,
        justifyContent:'center'
    },
    termsConditions:{
        color:'#1E90FF',
        fontWeight:'bold',
        fontSize:12
    }
   
});
  