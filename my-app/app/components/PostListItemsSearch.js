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
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const IMAGE_WIDTH = windowWidth * 0.3; // Defina a largura da imagem como uma porcentagem da largura da tela

const PostListItems = ({ post, onPress }) => {
  const { thumbnail, title } = post;

  const getThumbnail = (uri) => {
    if (uri) return { uri };

    return require("../../assets/icon.png");
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        //borderBottomWidth: "1",
        //borderColor: "#e6e6e6",
        padding: windowWidth * 0.025,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop:  windowWidth * 0.04,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: windowWidth * 0.04,
              fontWeight: "700",
              color: "black",
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <View style={{ flex: 0.5 }}>
        <View>
          <Image
            source={getThumbnail(thumbnail)}
            style={{
              borderRadius: 1,
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH / 1.7,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PostListItems;
