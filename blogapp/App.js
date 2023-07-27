import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, Image, Text } from 'react-native';

const data = [{
  id: "123",
  thumbnail: "https://images.unsplash.com/photo-1682844924122-3e8d214a3662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  title: "Mulher empoderada",
  author: "Admin",
}, {
  id: "1234",
  thumbnail: "https://images.unsplash.com/photo-1682844924122-3e8d214a3662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  title: "um garoto usando um chapéu de cowboy e macacao",
  author: "Admin",
}, {
  id: "12345",
  thumbnail: "https://images.unsplash.com/photo-1682844924122-3e8d214a3662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  title: "cinco brinquedos de carros de corrida de cores variadas",
  author: "Admin",
}
];

const width = (Dimensions.get('window').width) - 20;
let currentSlideIndex = 0;

export default function App() {

  const [dataToRender, setDataToRender] = useState([]);
  const [visibleSlideIndex, setVisibleSlideIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    currentSlideIndex = viewableItems[0]?.index || 0
    setVisibleSlideIndex(currentSlideIndex);
  });

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50, });

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
    //reset slide to first
    if (visibleSlideIndex === length - 1 && length) {
      handleScrollTo(1);
    }

    //reset slide to last
    if (visibleSlideIndex === 0 && length) {
      handleScrollTo(length - 2);
    }

    const lastSlide = currentSlideIndex === length - 1
    const firstSlide = currentSlideIndex === 0

    if (lastSlide && length) {
      setActiveSlideIndex(0);
    } else if (firstSlide && length) { setActiveSlideIndex(length - 2); }
    else { setActiveSlideIndex(currentSlideIndex - 1); }

  }, [visibleSlideIndex]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, }}>

        <Text style={{ fontWeight: '700', color: '#383838', fontSize: 22 }}>Featured Posts</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {data.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, marginLeft: 5, backgroundColor: activeSlideIndex === index ? '#383838' : 'transparent' }}>
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
        showsVerticalScrollIndicator={false}
        initialScrollIndex={1}
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
