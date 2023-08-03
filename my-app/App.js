import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';
import Slider from './app/components/Slider';
import Separator from './app/components/Separator';

const data = [
  {
    id: "123",
    thumbnail: "https://images.unsplash.com/photo-1682718619831-55aa4d18c231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80",
    title: "This is a test",
    author: "Admin",
  },
  {
    id: "1234",
    thumbnail: "https://images.unsplash.com/photo-1679092635426-993e7f18db0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80",
    title: "This is a title",
    author: "Admin",
  },
  {
    id: "12345",
    thumbnail: "https://images.unsplash.com/photo-1682714789132-66b617ab869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80",
    title: "Another title",
    author: "Admin",
  },
  {
    id: "123456",
    thumbnail: "https://images.unsplash.com/photo-1682714789081-5a3a7aa61906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1014&q=80",
    title: "Another one",
    author: "Admin",
  },
];

export default function App() {
  //return <Slider data={data} />;
  const ListHeaderComponent = () => {
    return (
      <View>
        <Slider data={data} />
        <View style={{ marginTop: 15 }}>
          <Separator ></Separator>
          <Text style={{ fontWeight: '700', color: '#383838', fontSize: 22, marginTop: 15 }}>Novos Artigos</Text>

        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{paddingHorizontal: 10}}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>;
      }} />
  );
}