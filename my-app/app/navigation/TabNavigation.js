import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import Settings from "../screens/Settings";
import { Pressable, useWindowDimensions } from "react-native";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const windowWidth = useWindowDimensions().width; // Obtém a largura da tela

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search1" : "search1";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "tags" : "tags";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {backgroundColor: "white"},
        tabBarActiveTintColor: "#E91D63",
        tabBarInactiveTintColor: "#ADADAD",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
          headerShown: false,
          title: "  ",
          headerShadowVisible: false,
          headerStatusBarHeight: 30,

          // headerTitleStyle: {
          //   fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
          //   fontWeight: "bold", // Peso da fonte
          // },
        }}
        name="Início"
        component={HomeNavigator}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="search1" size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#FFA9C6"
          },
          headerShown: true,
          headerShadowVisible: false,
          headerStatusBarHeight: 20,
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
            color: "white"
          },
        }}
        name="Explorar"
        component={Search}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="tags" size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#FFA9C6"
          },
          headerShown: true,
          headerShadowVisible: true,
          headerStatusBarHeight: 20,
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
            color: "white"
          },
        }}
        name="Favoritos"
        component={Favs}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: "#FFA9C6"
          },
          headerShown: true,
          headerShadowVisible: true,
          headerStatusBarHeight: 20,
          headerTitleStyle: {
            fontSize: windowWidth < 400 ? 20 : 28, // Tamanho do texto do cabeçalho
            fontWeight: "bold", // Peso da fonte
            color: "white"
          },
        }}
        name="Perfil"
        component={Settings}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
