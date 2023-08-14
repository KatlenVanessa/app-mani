import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import PostDetail from "../components/PostDetail";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const navigation = useNavigation();
    return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
          headerLeft: (props) => (
            <TouchableWithoutFeedback {...props} onPress={navigation.goBack}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(0,0,0.5)",
                }}
              >
                <Ionicons name="arrow-back" size={24} color="white  " />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
        component={PostDetail}
        name="PostDetail"
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
