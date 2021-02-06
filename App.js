import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <React.Fragment>
    <View style={styles.container}>
      <Text style={{fontSize:50}}>Login</Text>
      <Text>Welcome back,</Text>
      <Text>Signin to cotinue etiam tecimates sed ad</Text>
      <TextInput
        style={{
          height: 40,
           width:350,
        }}
        placeholder="Email"
        defaultValue={''}
      />
      <TextInput
        style={{
          height: 40,
          width:350,
         }}
        placeholder="Password"
        
        defaultValue={''}
      />
       <Text>Forgot password?</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container2}>
      
     <Button
        title="Sign in"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
     
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
   container2: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',


  },
  

});
