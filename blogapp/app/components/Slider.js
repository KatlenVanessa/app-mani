import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';


const width = (Dimensions.get('window').width) - 20;
let currentSlideIndex = 0;
let intervalId = 0;

export default function App({ data, title }) {

    const [dataToRender, setDataToRender] = useState([]);
    const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        currentSlideIndex = viewableItems[0]?.index || 0;
        //console.log("Current slide index: " + currentSlideIndex);
        setVisibleSlideIndex(currentSlideIndex);
    });

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    const flatList = useRef();

    const handleScrollTo = (index) => {
        flatList.current.scrollToIndex({ animated: false, index });
    }

    useEffect(() => {
        const newData = [[...data].pop(), ...data, [...data].shift()];
        setDataToRender([...newData]);
    }, [data.length]);

    useEffect(() => {
        const length = dataToRender.length;

        // Calculate the active slide index based on the current slide index
        let calculatedActiveSlideIndex = currentSlideIndex;
        if (currentSlideIndex === 0) {
            calculatedActiveSlideIndex = length - 3;
        } else if (currentSlideIndex === length - 1) {
            calculatedActiveSlideIndex = 0;
        } else {
            calculatedActiveSlideIndex = currentSlideIndex - 1;
        }

        setActiveSlideIndex(calculatedActiveSlideIndex);

    }, [currentSlideIndex, dataToRender.length]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, }}>

                <Text style={{ fontWeight: '700', color: '#383838', fontSize: 22 }}>{title}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {data.map((item, index) => {
                        const isActive = index === activeSlideIndex;
                        return (
                            <View
                                key={item.id}
                                style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, marginLeft: 5, backgroundColor: isActive ? '#383838' : 'transparent' }}>
                            </View>
                        );
                    })}
                </View>
            </View>

            <FlatList
                ref={flatList}
                data={dataToRender}
                keyExtractor={(item, index) => item.id + index}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                //initialScrollIndex={1}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image source={{ uri: item.thumbnail }} style={{ width, height: width / 1.7, borderRadius: 7 }}></Image>
                            <View style={{ width }}>
                                <Text style={{ fontWeight: '700', color: '#383838', fontSize: 22 }}>
                                    {item.title}
                                </Text>
                            </View>
                        </View>);
                }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width,
        paddingTop: 50,
    },
});
