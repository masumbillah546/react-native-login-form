import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, Dimensions} from 'react-native';
// import Checkbox from 'expo-checkbox';
// import CheckBox from '@react-native-community/checkbox';
import { Button, CheckBox,Avatar} from 'react-native-elements';
import { AntDesign, } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import Logo from '../components/Logo.js';
import Title from '../components/Title.js';
import Subtitle from '../components/Subtitle.js';
import Input from '../components/Input.js';
import Password from '../components/Password2.js';
import Btn from '../components/Btn.js';
import Footer from '../components/Footer.js';
import { verticalScale } from '../Utils/index.js';


const { height, width} = Dimensions.get('window');

export default function CreateCustomer() {

    const [count, setCount]= useState(0);
    // const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(false);

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    console.log('count------------->',toggleCheckBox);

    if(type==true){
      return (<Camera type={Camera.Constants.Type.front} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>(setType((x)=>(!x)))}><Text style={{fontSize:50,color:'white'}}>Cancel</Text></TouchableOpacity>
      </Camera>)
    }
  
    return (
      <>
        <View style={styles.container}>
          {/* <Logo url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} /> */}
          <Title title={"Create Customer"} />
          {/* <Subtitle value={'Nec nihil affert partiendo ne, quo no iisque \n etiam tacimates sed conceptam.'} /> */}
          <View style={styles.inputContainer}>
            <Input placeholder={'Name'}/>
            <Input placeholder={'Mobile'}/>
            <TextInput style={styles.input}
             placeholder={'Address'}
             placeholderTextColor='rgba(60, 60, 67, 0.3)'
             multiline={true}
            //  numberOfLines={4}            
            />
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:width-40,marginTop:20,maxWidth:400}}>
            <Text style={{fontSize:35}}>Image</Text>
            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', padding:10, alignItems:'center', borderColor:'black', borderWidth:1}}>
             <TouchableOpacity>
              <Text style={{fontSize:18,padding:10,textDecorationLine:'underline'}}>Choose pic</Text>
             </TouchableOpacity>
              <Avatar
                size="large"
                // title="CR"
                icon={{name: 'camera', type: 'font-awesome'}}
                // source="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/6-512.png"
                overlayContainerStyle={{backgroundColor: '#8899A6'}}
                // onPress={() => console.log("Works!")}
                onPress={()=>(setType((x)=>(!x)))}
                activeOpacity={0.7}
              />
            </View>             
          </View>        
        </View>
  
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height,
      width,
    },

    inputContainer:{
      // marginTop: verticalScale(59),
      marginTop: verticalScale(30),
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    input:{
      height: verticalScale(50),
      width:width-40,
      maxWidth:400,
      borderBottomWidth:1,
      borderBottomColor:'#DEDEDE',
      fontSize:17,
      padding:verticalScale(5),
    },
 
    label: {
        margin: verticalScale(8),
        color:'#8899A6'
    },
    btnContainer:{
        flex:1,
        justifyContent:'center'
    },
   
});
  