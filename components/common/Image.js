import React from 'react';
import {Image} from 'react-native';

const Logo = ({ url , imageStyle}) => (<Image style={imageStyle} source={url} />);
  
export default Logo;

// const styles = StyleSheet.create({

//   logoContainer:{
//     marginTop: verticalScale(59),
//     justifyContent: 'center',
//   }, 

// });
