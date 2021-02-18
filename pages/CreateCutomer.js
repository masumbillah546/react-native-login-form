import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef}from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, Dimensions} from 'react-native';
import { Button, CheckBox,Avatar} from 'react-native-elements';
import { AntDesign, } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';



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

    // const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [alert, setAlert] = useState();

    const [state,setState]=useState( {
          name:'Ma',
          mobile:'',
          address:''
        });

      const handleChange=()=>{
        console.log(state);
      }
  
    // console.log(state.address)

    const cam = useRef();

    const takePicture = async()=>{
    const options = {quality:0.5,base64:true,skipProcessing:false};
    const picture = await cam.current.takePictureAsync(options);
      if(picture){
        console.log("Picture source----->>>",picture.uri);
        setImageUrl(picture.uri);
        setType((x)=>(!x));
      }

    }


    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // mediaTypes: ImagePicker.MediaTypeOptions.Image,
        allowsEditing: true,
        base64:true,
        aspect: [4, 3],
        quality: 1,
      });


      let data = result.uri.indexOf(";");
      let res= result.uri.substr(0,data); 
      let type= res.split("data:")
      console.log('------------->',type[1]);

    if(type[1]=="image/gif"|| type[1]=="image/png"){

      setImageUrl(result.uri);
      setAlert(false);

    }else{
      setAlert('Image type invalid!!');
      setImageUrl(null);

    }
    
    };


    if(type==true){
      return (<Camera ref={cam} type={Camera.Constants.Type.front} style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
        <TouchableOpacity style={{marginBottom:10}} onPress={()=>(takePicture())}>
          <Avatar
                rounded
                size="large"
                icon={{name: 'camera', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: '#8899A6'}}
                activeOpacity={0.7}
          />
        </TouchableOpacity>
      </Camera>)
    }
  
    return (

        <View style={styles.container}>
          <Title title={"Create Customer"} />
          <View style={styles.inputContainer}>
            <Input onChange={(name)=>(setState(state => ({ ...state, name}))) } value={state.name} placeholder={'Name'}/>
            <Input onChange={(mobile)=>(setState(state => ({ ...state, mobile}))) } value={state.mobile} placeholder={'Mobile'}/>
            <TextInput 
            onChangeText={(text)=>(setState(state => ({ ...state, address:text})))}
            style={styles.input}
             placeholder={'Address'}
             placeholderTextColor='rgba(60, 60, 67, 0.3)'
             multiline={true}
            //  numberOfLines={4}            
            />
          </View>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:width-40,marginTop:20,maxWidth:400}}>
            <Text style={{fontSize:35}}>Image</Text>
            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', padding:10, alignItems:'center', borderColor:'black', borderWidth:1}}>
             <TouchableOpacity onPress={pickImage}>
              <Text style={{fontSize:18,padding:10,textDecorationLine:'underline'}}>Choose pic</Text>
             </TouchableOpacity>
              <Avatar
                size="large"
                // title="CR"
                icon={{name: 'camera', type: 'font-awesome'}}
                source={imageUrl}
                overlayContainerStyle={{backgroundColor: '#8899A6'}}
                onPress={()=>(setType((x)=>(!x)))}
                activeOpacity={0.7}
              />
            </View>
          </View>
            <Text style={{color:'red'}}>{alert}</Text>            
          <View style={styles.btnContainer}>
            <Btn onSubmit={() => handleChange()} title={'Submit'}/>
          </View>        
        </View>
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
        justifyContent:'center',
        marginBottom:100
    },
   
});
  