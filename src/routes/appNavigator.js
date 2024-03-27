import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgetPasswordScreen,
  HomeScreen,
  LoginScreen,
  ShopScreen,
  SignupScreen,
} from '../screens';
import {MyTabs} from './bottomTabNavigator';
const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="BottomTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
