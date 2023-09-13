import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import AppNavigator from "./AppNavigator";
import Settings from "../components/Settings";
import { useWindowDimensions } from "react-native";
import NavigatorComp from "./NavigatorComp";
import Search from "../components/Search";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const windowWidth = useWindowDimensions().width; // Obtém a largura da tela

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
          headerShown: false,
        }}
        name="Início"
        component={NavigatorComp}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="setting" size={size} color={color} />;
          },

          headerShadowVisible: false,
          title: "Configurações", // Título personalizado
          headerTintColor: "#F0997D", // Cor do texto do cabeçalho
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
          },
          
        }}
        
        name="Configurações"
        component={Settings}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
