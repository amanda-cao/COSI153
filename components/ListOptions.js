import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ListOptions = () => {
  const list = [
    {
      Name: 'Profile'
    },
    {
      Name: 'Budget'
    },
  ];


  const renderItem = ({ navigation, item }) => {
    return (
      <SafeAreaView >
      <View
        style={{
          backgroundColor: '#eee',
          flexDirection: 'column',
          justifyContent:'flex-end',
          margin: 15,
          padding: 10,
          borderRadius:20,
          width :250,
        }}>
        <Text style={{ fontSize: 25 }}>{item.Name}</Text>
        <Button 
            title= "Click Here!" 
            onPress={() =>
            navigation.navigate('Profile')
          }/>
      </View>
      </SafeAreaView >
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={list}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListOptions;