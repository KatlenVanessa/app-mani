import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PostListItems = ({ post }) => {
    const { thumbnail, title, createdAt } = post

    const getThumbnail = (uri) => {
        if (uri) return { uri };

        return require('../../assets/icon.png');
    };
    return (
        <TouchableOpacity style={{ flexDirection: "row" }} >
            <Image source={getThumbnail(thumbnail)} style={{ width: IMAGE_WIDTH, height: IMAGE_WIDTH / 1.7 }}></Image>
            <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#383838"}}>{title}</Text>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#d3d3d3"}}>{createdAt}</Text>
            </View>
        </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    container: {},
});



export default PostListItems;
