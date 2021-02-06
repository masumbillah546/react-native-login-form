import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}>Login</Text>
      <Text>Welcome back,</Text>
      <Text>Signin to cotinue etiam tecimates sed ad</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Email"
        defaultValue={''}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Password"
        
        defaultValue={''}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#253B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
