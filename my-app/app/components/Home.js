import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';
import Slider from './Slider';
import Separator from './Separator';
import PostListItems from './PostListItems';
import { getFeaturedPosts, getLatestPosts, getSinglePost } from "../api/post";
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
const limit = 20;
export default function Home({ navigation }) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);
  const [busy, setBusy] = useState(false);

  const fetchFeaturedPosts = async () => {
    const { error, posts } = await getFeaturedPosts();
    if (error) return console.error(error);

    setFeaturedPosts(posts);
  }

  const fetchLatestPosts = async () => {
    const { error, posts } = await getLatestPosts(limit, pageNo);
    if (error) return console.error(error);

    setLatestPosts(posts);
  }

  const fetchMorePosts = async () => {
    //console.log("running");
    if (reachedToEnd || busy) {
      return;
    }
    pageNo += 1;
    setBusy(true);
    const { error, posts, postCount } = await getLatestPosts(limit, pageNo);
    setBusy(false);
    if (error) return console.error(error);

    if (postCount === latestPosts.length) {
      return setReachedToEnd(true);
    }
    setLatestPosts([...latestPosts, ...posts]);
    //console.log("reached to end");
  }

  useEffect(() => {
    fetchFeaturedPosts();
    fetchLatestPosts();

    return () => {
      pageNo = 0;
      setReachedToEnd(false);
    };

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

  const fetchSinglePost = async (slug) => {
    const { error, post } = await getSinglePost(slug);

    if (error) console.error(error);
    navigation.navigate('PostDetail', { post });;
  };

  const handlePostPress = (post) => {
    navigation.navigate('PostDetail', {});
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginTop: 15 }}>
        <PostListItems onPress={() => fetchSinglePost(item.slug)} post={item}></PostListItems>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    <Separator width='90%' style={{ marginTop: 15 }}></Separator>
  }
  return (
    <FlatList
      data={latestPosts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      onEndReached={fetchMorePosts}
      onEndReachedThreshold={0}
      ListFooterComponent={() => {
        return reachedToEnd ? (
          <Text style={{ fontWeight: 'bold', color: '#383838', textAlign: 'center', paddingVertical: 15 }}>Fim</Text>) : null;
      }}
    />
  );
}