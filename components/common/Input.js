import React from 'react';
import {TextInput} from 'react-native';

const Input = ({placeholder, inputStyle})=>(<TextInput style={inputStyle} placeholder={placeholder}/>);

export default Input;
// const styles = StyleSheet.create({
//   input:{
//     // width: 343,
//     height: verticalScale(60),
//     width:width-40,
//     alignItems: 'center',
//     borderBottomWidth:1,
//     borderBottomColor:'#DEDEDE',
//     placeholderTextColor:'rgba(60, 60, 67, 0.3)',
//     fontSize:17,
        
//   },

// });
