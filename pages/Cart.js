import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Title from '../components/cart-item/Title.js';
// import Title from '../components/Title.js';
import Description from '../components/cart-item/Description.js';
import PriceAndStock from '../components/cart-item/PriceAndStock.js';
import Quantity from '../components/cart-item/Quantity.js';
import DeleteBtn from '../components/cart-item/DeleteBtn.js';
import ProductImage from '../components/cart-item/ProductImage.js';
import { verticalScale } from '../Utils/index.js';

const { height, width} = Dimensions.get('window');

export default function Cart() {

    const [count, setCount]= useState(0);
    // console.log('count------------->',verticalScale(59));
  
    return (
      <>
        <View style={styles.container}>
          
         <View style={styles.itemContainer}>
           <View></View>
           <view style={{display:'flex',flexDirection:'column', justifyContent:'space-between',}}>
            <Title title={'Metal Earrings'}/>
            <Description title={'Special Design'}/>
            <PriceAndStock price={'$10'} title={'. In stock'}/>
            <Quantity decrement={'-'} increment={'+'}/>
           </view>
           <view>
            <ProductImage url={require('../assets/Bitmap.png')}/>
           </view>
         </View>
          
        </View>
  
      </>
    );
  }

  const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height,
      width,
   },
   itemContainer:{
      display:'flex',
      // backgroundColor:'lightblue',
      // height:110,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:width-40,

   },
  
   
});
  