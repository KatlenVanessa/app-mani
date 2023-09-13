import React, { useEffect, useState } from "react";
import PostListItemSeach from "./PostListItemsSearch";
import { getSimilarPost, getSinglePost } from "../api/post";
import { View, StyleSheet } from "react-native";
import Separator from "./Separator";

const RelatedPosts = ({ postId, onPostPress }) => {
  const [posts, setPosts] = useState([]);

  const fetchSimilarPosts = async () => {
    const { error, posts } = await getSimilarPost(postId);
    if (error) {
      console.log(error);
    }
    setPosts([...posts]);
  };

  useEffect(() => {
    fetchSimilarPosts();
  }, [postId]);

  return posts.map((post) => {
    return (
      <View style={styles.container} key={post.id}>
      <Separator></Separator>
        <PostListItemSeach
          onPress={() => onPostPress(post.slug)}
          post={post}
        ></PostListItemSeach>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: { marginTop: 10 },
});

export default RelatedPosts;
