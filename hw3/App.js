import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';
import HomeScreen from './components/HomeScreen.js'
import AboutScreen from './components/AboutScreen.js'
import StartScreen from './components/StartScreen.js'
import BudgetHomeScreen from './components/BudgetHomeScreen.js'
import ProfileScreen from './components/ProfileScreen.js'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
      <Stack.Screen name = 'Home' component={HomeScreen}
        options={{
            headerShown:false,
            contentStyle:{
              backgroundColor:'#e9967a'
      },
        }}
        />
      <Stack.Group 
        screenOptions={{
        headerStyle: {
          backgroundColor: '#e9967a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle:{
       backgroundColor:`#fff5ee`
     },
      }}
    >
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="BudgetHome" component={BudgetHomeScreen}
              options={{ title: 'Budget Home'
              }}
        />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create ({
  container: {flex:1, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center'},
  textinput:{
      margin:20,
      fontSize:20
    },
  header: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
       },
    },
});


export default MyStack;