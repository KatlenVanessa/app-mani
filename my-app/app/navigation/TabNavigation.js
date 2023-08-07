import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Search from '../components/Search';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} ></Tab.Screen>
            <Tab.Screen name='Search' component={Search} ></Tab.Screen>
        </Tab.Navigator>
    );
};



export default TabNavigation;
