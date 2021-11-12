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

const ListOptions = () => {
  const list = [
    {
      Name: 'Profile'
    },
    {
      Name: 'Budget'
    },
  ];


  const renderItem = ({ item }) => {
    return (
      <SafeAreaView >
      <View
        style={{
          backgroundColor: '#eee',
          flexDirection: 'column',
          justifyContent:'flex-end',
          margin: 15,
          padding: 10,
        }}>
        <Text style={{ fontSize: 25 }}>{item.Name}</Text>
        <Button 
            title= "Click Here!" />
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