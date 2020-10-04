import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Category} from '../pages';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: 'black',
          justifyContent: 'center',
        },
        labelStyle: {
          color: 'white',
          fontSize: 14,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
