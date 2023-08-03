import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';
const width = Dimensions.get('window').width - 20;

export default function Slider({ data }) {
    const flatlistRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Create an interval to keep scrolling the FlatList automatically
        const scrollInterval = setInterval(() => {
            // Get the current index of the FlatList
            const nextIndex = (currentIndex + 1) % data.length;
            // Scroll to the next slide
            flatlistRef.current.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }, 3000); // Set the interval time in milliseconds (e.g., 3000ms = 3 seconds)

        // Clear the interval when the component unmounts to avoid memory leaks
        return () => clearInterval(scrollInterval);
    }, [currentIndex]);

    const renderItem = ({ item }) => (
        <View style={styles.slideContainer}>
            <Image style={styles.slideImage} source={{ uri: item.thumbnail }} />
            <Text numberOfLines={2} style={styles.slideAuthor}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.slideTitle}>Destaques</Text>
            </View>
            <FlatList
                ref={flatlistRef}
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width,
        paddingTop: 50,
    },
    slideContainer: {
        width,
        padding: 10,
        alignItems: 'center',
    },
    slideImage: {
        width: width - 20,
        height: 200,
        borderRadius: 8,
    },
    slideAuthor: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    slideTitle: {
        marginLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

