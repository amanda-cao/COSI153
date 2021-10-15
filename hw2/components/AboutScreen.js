import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image} from 'react-native';
import icon from '../assets/about-screen-icon.jpg'

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;
  return(
    <View style={styles.container}>
    <View style = {{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
    <View style = {{flex: 3, alignItems: 'center', justifyContent: 'flex-start'}}>
    <Text style = {styles.baseText}> Hi {name}! This app is to help students/young adults save and budget more realistically and functionally :) </Text>
    <Image
        source= {icon}
        style={{ width: 300, height: 300, justifyContent:'center' }}
        />
    </View>
    <View style = {{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
     <Button
          title="Click to Begin!"
          onPress={() =>
            navigation.navigate('Start', {
              name,
            })
          }
        />
    </View>
    </View>
  </View>
  )
       // we're using the parameter name passed in from the HomeScreen
};

export default AboutScreen;

const styles = StyleSheet.create ({
  container: {flex:1, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center', margin: 20},
    headerText:{
      fontSize:40,
      margin:20,
      textAlign:'center',
      color: 'white', 
      fontFamily:"SFUIDisplay-Bold"
    },
});