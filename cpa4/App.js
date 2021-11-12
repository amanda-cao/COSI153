import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';
import ScreenTemplate from './containers/ScreenTemplate.js';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js';
import StartScreen from './components/StartScreen.js';
import BudgetHomeScreen from './components/BudgetHomeScreen.js';
import ProfileScreen from './components/ProfileScreen.js';
import ListOptions from './components/ListOptions.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#e9967a',
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
            contentStyle: {
              backgroundColor: `#fff5ee`,
            },
          }}>
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="BudgetHome"
            component={BudgetHomeScreen}
            options={{ title: 'Budget Home' }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <ScreenTemplate
        footer ={
        <View
          style={{
            backgroundColor: '#e9967a',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style = {{flexDirection:"row", flex: 0.6}}>
          <Button  icon={
          <Icon
            reverse
            name='cellular-outline'
            type='ionicon'
          color='black'/>}
          title = "Home"
          color = "white"/>
          <Icon
            reverse
            name='credit-card-alt'
            type='font-awesome'
            color='gray' />
          </View>
        </View>}>
      </ScreenTemplate>
    </NavigationContainer>
  );
};

export default MyStack;
