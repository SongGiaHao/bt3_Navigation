import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './sc/SignIn';
import SignUp from './sc/SignUp';
import React from 'react';


export default class App extends Component{
  render(){
    const Stack = createNativeStackNavigator();

  
  return (
 <NavigationContainer>
  <Stack.Navigator>
 <Stack.Screen name="SignIn" component={SignIn} />
<Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
 </NavigationContainer>


  );
}
}

const styles = StyleSheet.create({

});
