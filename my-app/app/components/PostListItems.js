import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import dateFormat from "dateformat";

const windowWidth = Dimensions.get("window").width;
const IMAGE_WIDTH = windowWidth * 0.5; // Defina a largura da imagem como uma porcentagem da largura da tela

const PostListItems = ({ post, onPress }) => {
  const { thumbnail, title, createdAt, author } = post;

  const getThumbnail = (uri) => {
    if (uri) return { uri };

    return require("../../assets/icon.png");
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#FFC3A1",
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Image
        source={getThumbnail(thumbnail)}
        style={{
          borderRadius: 7,
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH / 1.7,
        }}
      />
      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={{ fontSize: windowWidth * 0.04, fontWeight: "700", color: "#A75D5D" }}>
          {title}
        </Text>
        <Text style={{ fontSize: windowWidth * 0.035, color: "#D3756B" }}>
          {dateFormat(createdAt, "mediumDate")} - {author}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PostListItems;
