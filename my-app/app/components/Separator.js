import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = ({
    width = '100%',
    height = 1,
    backgroundColor = '#d3d3d3',
    style
}) => {
    return (
        <View style={[{ width, height, backgroundColor, alignSelf: 'center' }, style]}></View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default Separator;
