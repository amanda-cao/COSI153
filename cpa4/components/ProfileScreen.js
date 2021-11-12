import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@app.js')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setAge(age)
            setOccupation(occupation)
            console.log('just set Name')
          } else {
            console.log('just read a null value from Storage')
            setAge("")
            setOccupation("")
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@myapp', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }


const ProfileScreen = ({ navigation, route}) => {
  const { name } = route.params;
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  
  return(
    <SafeAreaView >
    <View style={styles.container}>
    <Text style = {styles.baseText}> This is where {name} would start to edit user's profile. TBD. Need to figure out save function. </Text>
    <Text style = {styles.baseText}> Age:  </Text>
    <TextInput
          style={styles.textinput}
          placeholder="Enter Age: "
          onChangeText={age => setAge(age)}
          keyboardType="numeric"
        />
    <Text style = {styles.baseText}> Occupation:  </Text>
    <TextInput
          style={styles.textinput}
          placeholder="Occupation: "
          onChangeText={occupation => setOccupation(occupation)}
        />

     <Button
          title="Go back to Home Screen"
          onPress={() =>
            navigation.navigate('Home')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
      />
      <Button 
          style= {styles.button}
          title="Save"
          onPress={() =>
            storeData({age, occupation})
          }
      />
    </View>
    </SafeAreaView >
  )
};



export default ProfileScreen;

const styles = StyleSheet.create ({
  container: {flex:1, alignItems:'center', justifyContent:'center'}, 
  baseText: {textAlign:'center', justifyContent:'center'},
  textinput:{
      margin:20,
      fontSize:20
    },
  button : {
    color:"#f194ff",
  }
});