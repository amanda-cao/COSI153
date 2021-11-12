import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';




const BudgetHomeScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const { heading } = route.params;
  return(
    <SafeAreaView >
    <View style={styles.container}>
    <Text style = {styles.baseText}> This is where {name} would start to budget and customize things. TBD. </Text>
     <Button
          title="Go back to Home Screen"
          onPress={() =>
            navigation.navigate('Home')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />
    </View>
    </SafeAreaView >
  )
};


export default BudgetHomeScreen;

const styles = StyleSheet.create ({
  container: {flex:1, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center'},
  textinput:{
      margin:20,
      fontSize:20
    },
});