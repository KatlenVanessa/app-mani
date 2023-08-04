import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';
import Slider from './app/components/Slider';
import Separator from './app/components/Separator';
import PostListItems from './app/components/PostListItems';
import { getFeaturedPosts, getLatestPosts } from './app/components/api/post';
import Constants from 'expo-constants';

const data = [
  {
    id: "123",
    thumbnail: "https://images.unsplash.com/photo-1682718619831-55aa4d18c231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80",
    title: "This is a test",
    author: "Admin",
    createdAt: Date.now(),
  },
  {
    id: "1234",
    thumbnail: "https://images.unsplash.com/photo-1679092635426-993e7f18db0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80",
    title: "This is a title",
    author: "Admin",
    createdAt: Date.now(),
  },
  {
    id: "12345",
    thumbnail: "https://images.unsplash.com/photo-1682714789132-66b617ab869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80",
    title: "Another title",
    author: "Admin",
    createdAt: Date.now(),
  },
  {
    id: "123456",
    thumbnail: "https://images.unsplash.com/photo-1682714789081-5a3a7aa61906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1014&q=80",
    title: "Another one",
    author: "Admin",
    createdAt: Date.now(),
  },
];

let pageNo = 0;
const limit = 10;
export default function App() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchFeaturedPosts = async () => {
    const {error, posts} = await getFeaturedPosts();
    if (error) return console.error(error);
    
    setFeaturedPosts(posts); 
  }

  const fetchLatestPosts = async () => {
    const {error, posts} = await getLatestPosts(limit, pageNo);
    if (error) return console.error(error);
    
    setLatestPosts(posts); 
  }

  useEffect(() => {
    fetchFeaturedPosts();
    fetchLatestPosts();

  }, []);

  //return <Slider data={data} />;
  const ListHeaderComponent = () => {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        {featuredPosts.length ? (<Slider data={featuredPosts} />) : null}
        <View style={{ marginTop: 15 }}>
          <Separator ></Separator>
          <Text style={{ fontWeight: '700', color: '#383838', fontSize: 22, marginTop: 15 }}>Novos Artigos</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={latestPosts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 10 , paddingBottom: 20}}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={<Separator width='90%' style={{marginTop: 15}}></Separator>}
      renderItem={({ item }) => {
        return (
          <View style={{ marginTop: 15}}>
            <PostListItems post={item}></PostListItems>
          </View>
        );
      }}
    />
  );
}