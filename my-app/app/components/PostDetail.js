import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import dateFormat, { masks } from "dateformat";
import Markdown from "react-native-markdown-display";
import * as Linking from "expo-linking";
import RelatedPosts from "./RelatedPosts";
import Separator from "./Separator";
import { getSinglePost } from "../api/post";


const MY_WEBSITE_LINK = "myblog.com/blog";

const { width } = Dimensions.get("window");

const PostDetail = ({ route, navigation }) => {
  const post = route.params?.post;

  const rules = {
    paragraph: (node, children, parent, styles) => (
      <Text key={node.key} style={styles.paragraph} selectable>
        {children}
      </Text>
    ),
  };

  const handleSinglePostFetch = async (slug) => {
    const { error, post } = await getSinglePost(slug);

      if (error) {
        return console.log(error);
      }
      navigation.push("PostDetail", { post });
  }

  const handleOnLinkPress = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Erro ao abrir o link", "Não foi possível abrir a URL");
    }
  };

  if (!post) {
    return null;
  }

  const getImage = (uri) => {
    if (uri) return { uri };
    return require("../../assets/icon.png");
  };

  const { title, thumbnail, tags, createdAt, author, content } = post;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={getImage(thumbnail)}
        style={{ width, height: width / 1.7 }}
      ></Image>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "700",
            color: "#383838",
            fontSize: 22,
            marginTop: 15,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "827E7E" }}>By {author}</Text>
          <Text style={{ color: "827E7E" }}>
            {dateFormat(createdAt, "mediumDate")}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text selectable style={{ color: "827E7E" }}>
            Tags
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {tags.map((tag, index) => (
              <Text style={{ marginLeft: 5, color: "blue" }} key={tag + index}>
                #{tag}
              </Text>
            ))}
          </View>
        </View>
        <Markdown 
        //rules={rules} 
        style={styles}
        onLinkPress={handleOnLinkPress}>{content}</Markdown>
      </View>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#383838",
            fontSize: 22,
          }}
        >
          Artigos Relacionados
        </Text>
        <Separator width="100%"></Separator>
        <RelatedPosts postId={post.id}  onPostPress={handleSinglePostFetch}></RelatedPosts>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    lineHeight: 22,
    color: "#545050",
    letterSpacing: 0.8,
  },
  body: {
    fontSize: 16,
  },
  link: {
    color: "#545050",
  },
  list_item: {
    color: "#7784f8",
    paddingVertical: 5,
  },
});

export default PostDetail;
