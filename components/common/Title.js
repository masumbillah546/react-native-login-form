import React from 'react';
import {Text} from 'react-native';
const Title = ({title, titleStyle}) => (<Text style={ titleStyle}>{title}</Text>);
export default Title;
// const styles = StyleSheet.create({

//     titleCotainer:{
//       height:verticalScale(41),
//       marginTop:verticalScale(35),
//     },
//     title:{
      
//       fontSize: 'min(10vw, 34px)',
//       fontStyle:'normal',
//       fontWeight: 'bold',
//       textAlign:'center',
//       letterSpacing:0.374,
//       lineHeight:verticalScale(41)

//     },
   
  
//   });
  