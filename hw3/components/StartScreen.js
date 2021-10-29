import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';


function StartScreen({ navigation, route }) {
  const { name } = route.params;
  return (
      <View style={styles.container}>
      <View style = {styles.header}> 
      <Text> {name}'s Budgeting App!</Text> 
      </View>
        <Text style = {styles.baseText}>Let's learn more about you to customize this app to your liking! Click on Edit Profile to customize your profile, or click on Let's Start Budgeting! to begin! </Text>
        <Button
          title="Edit Profile!"
          onPress={() => navigation.navigate('Profile', {
            name, 
            }
            )}
        />
        
        <Button
          title="Let's Start Budgeting!"
          onPress={() => navigation.navigate('BudgetHome', {
            name, 
            }
            )}
        />
      </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create ({
  container: {flex:1, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center'},
});