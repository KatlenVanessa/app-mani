import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import { AntDesign } from '@expo/vector-icons';
import AppNavigator from './AppNavigator';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <AntDesign name='home' size={size} color={color} />;
                },
                headerShown: false,  
            }} name='Home' component={AppNavigator} ></Tab.Screen>

            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <AntDesign name='search1' size={size} color={color} />;
                },
            }} name='Search' component={Search} ></Tab.Screen>
        </Tab.Navigator>
    );
};


export default TabNavigation;
