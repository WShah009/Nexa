import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {HomeScreen, ShopScreen} from '../screens'; // Import your screen components

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          height: '9%',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            const isFocused = useIsFocused();
            return (
              <Icon
                name={isFocused ? 'home' : 'home-outline'}
                size={33}
                color={isFocused ? '#db3022' : color}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
                marginBottom: 6,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            const isFocused = useIsFocused();
            return (
              <Icon
                name={isFocused ? 'cart' : 'cart-outline'}
                size={33}
                color={isFocused ? 'red' : color}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
                marginBottom: 6,
              }}>
              Shop
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            const isFocused = useIsFocused();
            return (
              <Icon
                name={isFocused ? 'bag-handle' : 'bag-handle-outline'}
                size={33}
                color={isFocused ? 'red' : color}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
                marginBottom: 6,
              }}>
              Bag
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            const isFocused = useIsFocused();
            return (
              <Icon
                name={isFocused ? 'heart' : 'heart-outline'}
                size={33}
                color={isFocused ? 'red' : color}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
                marginBottom: 6,
              }}>
              Favourites
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            const isFocused = useIsFocused();
            return (
              <Icon
                name={isFocused ? 'person' : 'person-outline'}
                size={33}
                color={isFocused ? 'red' : color}
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
                marginBottom: 6,
              }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
