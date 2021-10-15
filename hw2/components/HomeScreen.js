import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image} from 'react-native';
import logo from '../assets/piggy.png'
import KeyboardShift from './KeyboardShift';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({ navigation }, input) => {
  const [name, setName] = useState('');
  useEffect(() => {getData()}
           ,[])

const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@HomeScreen')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            this.setName(data.name)
            console.log('just set Name')
          } else {
            this.setName(" ")
          }
        } catch(e) {
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@HomeScreen', jsonValue)
          alert('Data successfully saved')
        } catch (e) {
          console.dir(e)
        }
  }
    
  return (  
     <SafeAreaView style={styles.container}>
      <KeyboardShift>
        {() => (
      <View style = {styles.container}>
      <View style = {{flex: 4, justifyContent: 'center', alignContent: 'center'}}>
        <View style = {{flex:3, justifyContent: 'center', alignItems: 'center'}}>
        <Image
        source= {logo}
        style={{ width: 300, height: 300, justifyContent:'center' }}
        />
        </View>
      <View style={styles.header}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your name: "
          onChangeText={name => setName(name)}
      />
      <Button 
          style = {styles.buttons}
          title="Save Name"
          onPress={() =>
            storeData({name})
            }
        />
       <Button 
          style = {styles.buttons}
          title="Click to Read About the App!"
          onPress={() =>
            navigation.navigate('About', {
              name,
            })
          }
        />
      </View>
      </View>
    </View>
    )}
      </KeyboardShift>
    </SafeAreaView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create ({
  container: { 
    flexDirection: 'column',
    flex:4, 
    alignItems:'center', 
    justifyContent:'center'
    }, 
  textinput:{
    margin:20,
    fontSize:20, 
    height: 40,
    borderWidth: 1,
    padding: 10,
    },
  header: {
    flex:2, 
    alignItems:'center', 
    justifyContent:'center'
    },
  button : {flex:2, alignItems:'center', justifyContent:'center',
    backgroundColor: `#fff5ee`,
  }
});