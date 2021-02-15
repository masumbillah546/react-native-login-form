import React from 'react';
import { Text} from 'react-native';

const Description =({value, textStyle})=>(<Text style={ textStyle}>{value}</Text>);
export default Description;
// const styles = StyleSheet.create({

//   titleCotainer:{
//     height:44,
//   },
//   title:{
//     marginTop:verticalScale(16),
//     fontSize: 17,
//     fontStyle:'normal',
//     fontWeight: 'normal',
//     textAlign:'center',
//     letterSpacing:-0.408,
//     lineHeight:22,
//     color:'rgba(60, 60, 67, 0.6)'

//   },
  
//   });
  