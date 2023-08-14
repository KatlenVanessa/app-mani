import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import dateFormat from 'dateformat';
const IMAGE_WIDTH = 100;

const PostListItems = ({ post, onPress }) => {
    const { thumbnail, title, createdAt, author } = post;

    const getThumbnail = (uri) => {
        if (uri) return { uri };

        return require('../../assets/icon.png');
    };
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }} >
            <Image source={getThumbnail(thumbnail)} style={{ width: IMAGE_WIDTH, height: IMAGE_WIDTH / 1.7 }}></Image>
            <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#383838" }}>{title}</Text>
                <Text style={{ fontSize: 14, color: "#827E7E" }}>{dateFormat(createdAt, "mediumDate")} - {author}</Text>
            </View>
        </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    container: {},
});



export default PostListItems;
