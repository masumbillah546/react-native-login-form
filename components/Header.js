import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity, CheckBox } from 'react-native';
import { verticalScale } from '../Utils/index.js';


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
export default Header;
const styles = StyleSheet.create({
     
    headerContainer:{

        flexDirection:'row',
        backgroundColor:'#DEDEDE',
        height:verticalScale(80),
        width:'100%',
        alignItems:'flex-start',
        borderBottomWidth:0.5,
        borderBottomColor:'#8899A6',
        marginBottom:verticalScale(70)


    },
    headerContent:{
        margin:verticalScale(8),
        alignSelf:'flex-end',
    },
    
   
});