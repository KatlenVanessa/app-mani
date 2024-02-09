import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PostDetail from "../components/PostDetail";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width; // Obtém a largura da tela

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Início"
        options={{
          title: "Home",
          headerShadowVisible: true,
          
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
            color: 'black'
          },
          headerStyle: {
            backgroundColor: "white"
          },
        }}
      />
      <Stack.Screen
        options={{
          title: " ",
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
