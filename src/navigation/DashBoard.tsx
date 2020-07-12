/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Dashboard/HomeScreen';
import SettingsScreen from '../pages/Dashboard/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type DashboardStackParamList = {
  Home: undefined;
  Settings: undefined;
};
const Tab = createBottomTabNavigator<DashboardStackParamList>();

type Props = {};
const DashBoard: React.FC<Props> = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#8a2be2',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                style={{ color: '#8a2be2' }}
                name={focused ? 'md-home' : 'md-home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            return (
              <Ionicons
                style={{ color: '#8a2be2' }}
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default DashBoard;
