import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';

const Logo = ({ url }) => (<View style={styles.logo}>

  <Image style={{
    width: 50,
    height: 50,

  }}
    source={{
      uri: url,
    }} />
</View>)

const Title = ({title}) => (<Text style={ styles.title}>{title}</Text>);

const SubTitle =({value})=>(<Text style={styles.subtitle}>{value}</Text>
  );

const Email = ({placeholder})=>(
<TextInput
  style={styles.input}
  placeholder={placeholder}
  defaultValue={''}
 
/>
);

const Password = ({placeholder})=>(<View style={styles.password}>
  <TextInput
    style={styles.input2}
    placeholder={placeholder}
    defaultValue={''}
    
  />
   <Text style={{color:'#1E90FF', fontWeight:'bold', fontSize:12}}>Forgot password?</Text>
  </View> 
  );

const Btn=({title})=>(<TouchableOpacity style={styles.btnContainer}>
  <Text style={{color:'#fff',fontSize:18, fontWeight:'bold'}}>{title}</Text></TouchableOpacity>
 );

const CreateAccount=({})=>(<View style={{ justifyContent:'center', alignItems:'center',flexDirection:'row', paddingTop:30,}}>
  <Text style={{color:'#8899A6', fontSize:16}}>Don't have an account?</Text>
  <Text style={{color:'#1E90FF', fontWeight:'bold', fontSize:16}}> Create account</Text>
</View>)

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Logo url={'https://i.pinimg.com/originals/bf/ea/1e/bfea1efaa3b7126e8c2195fa380c9523.jpg'} />
        <Title title={"Login"} />
        <SubTitle value={'Welcome back,'} />
        <SubTitle value={'Signin to cotinue etiam tecimates sed ad'} />
        <View style={styles.inputview}>
          <Email placeholder={'Email'}/>
          <Password placeholder={'Password'}/>         
        </View>
        <View style={{flex:1, justifyContent:'center'}}>
        <Btn title={'Sign in'}/>
        <CreateAccount />
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
  logo:{
    padding:40
  },
  title:{
    paddingBottom:20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle:{
    color:'#8899A6',
    fontSize:18
  },
  input:{
    height: 45,
    width: 320,
    borderBottomWidth:1,
    borderBottomColor:'#DEDEDE',
    placeholderTextColor:'#8899A6',
    fontSize:15,
    
    
  },
  input2:{
    height: 45,
    width: 213,
    placeholderTextColor:'#8899A6',
    fontSize:15,
    padding:0,
    margin:0
    
  },
  inputview:{
    marginTop:40,
    flexDirection:'column'
  },
  password:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:320,
    height:45,
    borderBottomColor:'#DEDEDE',
    borderBottomWidth:1,
  },
  btnContainer:{
    
    justifyContent:'center',
    width:350,
    height:50,
    borderRadius:15,
    backgroundColor:'#1E90FF',
    alignItems:'center',
   
  }

});


{/* <View style={styles.container}>


<View style={{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
}}>
  <TextInput
    style={{
      height: 40,
      width: 330,
    }}
    placeholder="Email"
    defaultValue={''}
  />
</View>
<View style={{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center'

}}>
  <TextInput
    style={{
      height: 40,
      width: 220,
    }}
    placeholder="Password"
    defaultValue={''}
  />
  <Text style={{ color: 'blue' }}>Forgot password?</Text>
</View>

<StatusBar style="auto" />
</View>
<View style={styles.container2}>

<Button style={styles.button}
  title="Sign in"
/>

</View> */}