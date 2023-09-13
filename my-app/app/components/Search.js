import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView, Text } from "react-native";
import Constants from "expo-constants";
import { getSinglePost, searchPosts } from "../api/post";
import PostListItems from "./PostListItems";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const navigation = useNavigation();

  const handleOnSubmit = async () => {
    if (!query.trim()) {
      return setNotFound(true);
    }

    const { error, posts } = await searchPosts(query);
    if (error) {
      return console.log(error);
    }
    if (!posts.length) {
      return setNotFound(true);
    }
    setResults([...posts]);
    setNotFound(false);
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
        style={[styles.searchInput, { width: wp("90%") }]} // Defina a largura responsiva aqui
        onSubmitEditing={handleOnSubmit}
      ></TextInput>

      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {notFound ? (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: hp("2%"),
              color: "rgba(0,0,0,0.3)",
              textAlign: "center",
              marginTop: hp("2%"),
            }}
          >
            Resultado Não Encontrado
          </Text>
        ) : (
          results.map((post) => {
            return (
              <View key={post.id} style={{ marginTop: hp("1%") }}>
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
    padding: wp("5%"),
    marginTop: hp("2%"),
    flex: 1,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: "#F2F2FD",
    color: "#D3756B",
    backgroundColor: "white",
    borderRadius: wp("2%"),
    padding: wp("2%"),
    fontSize: hp("2%"),
  },
});

export default Search;
