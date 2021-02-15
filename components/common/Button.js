import React, {useState}from 'react';
import { Text,TouchableOpacity} from 'react-native';

const Button=({btnStyle, label, labelStyle, setcount,})=>(<TouchableOpacity onPress={() => setcount(x => x + 1)} style={btnStyle}>
  <Text  style={labelStyle}>{label}</Text></TouchableOpacity>);

export default Button;
