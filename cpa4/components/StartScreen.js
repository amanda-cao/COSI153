import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';
import ListOptions from './ListOptions.js';


function StartScreen({ navigation, route }) {
  const { name } = route.params;
  return (
      <View style={styles.container}>
      <View style = {styles.header}> 
      <Text> {name}'s Budgeting App!</Text> 
      </View>
        <Text style = {styles.baseText}>Let's learn more about you to customize this app to your liking! Click on Edit Profile to customize your profile, or click on Let's Start Budgeting! to begin! </Text>
        <View style={{flex:1, flexDirection:'flex-end'}}>
        <ListOptions/>
        </View>
      </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create ({
  container: {flex:2, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center'},
});