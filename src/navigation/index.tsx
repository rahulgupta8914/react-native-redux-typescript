/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import SplashScreen from '../pages/Auth/SplashScreen';
import SignInScreen from '../pages/Auth/SignInScreen';
import SignUpScreen from '../pages/Auth/SignUpScreen';
import DashBoard from './DashBoard';

export type RootStackParamList = {
  Welcome: undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
  DashBoard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    // primary: ""
  },
};

export default () => {
  const reduxState = (state: RootState) => state.auth;
  const state = useSelector(reduxState);
  const { isLoading, loggedIn } = state;
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar animated barStyle="dark-content" backgroundColor={'white'} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Welcome">
          {isLoading && !loggedIn && (
            <Stack.Screen name="Welcome" component={SplashScreen} />
          )}

          {loggedIn ? (
            <Stack.Screen name="DashBoard" component={DashBoard} />
          ) : (
            <>
              <Stack.Screen name="Sign In" component={SignInScreen} />
              <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
