import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView, Text } from "react-native";
import Constants from "expo-constants";
import { getSinglePost, searchPosts } from "../api/post";
import PostListItems from "./PostListItems";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const navigation = useNavigation();

  const handleOnSubmit = async () => {
    if (!query.trim()) {
      return;
    }

    const { error, posts } = await searchPosts(query);
    if (error) {
      return console.log(error);
    }
    console.log("posts length: ", posts.length);
    if (!posts.length) { return setNotFound(false); }

    setResults([...posts]);
  };

  const handlePostPress = async (slug) => {
    const { error, post } = await getSinglePost(slug);
    if (error) {
      return console.log(error);
    }
    navigation.navigate("PostDetail", { post });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Buscar.."
        style={styles.searchInput}
        onSubmitEditing={handleOnSubmit}
      ></TextInput>

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {notFound ? (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "rgba(0,0,0,0.3)",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Resultado Não Encontrado
          </Text>
        ) : (
          results.map((post) => {
            return (
              <View key={post.id} style={{ marginTop: 10 }}>
                <PostListItems
                  post={post}
                  key={post.id}
                  onPress={() => handlePostPress(post.slug)}
                ></PostListItems>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    flex: 1,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: "#383838",
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
  },
});

export default Search;
