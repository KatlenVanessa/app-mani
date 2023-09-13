import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
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
          headerShadowVisible: false,
          title: "Início", // Título personalizado
          headerTintColor: "#F0997D", // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
          },
        }}
      />
      <Stack.Screen
        options={{
          title: "",
          headerTransparent: false,
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
