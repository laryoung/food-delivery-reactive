import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import MyAccountScreen from '../screens/MyAccountScreen';
import ClientStack from './ClientStack';

const Tabs = createBottomTabNavigator();

export default function ClientTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.buttons,
      }}>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon type="material" name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon type="material" name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color, size }) => (
            <Icon type="material" name="view-list" size={size} color={color} />
          ),
          tabBarBadge: 2,
        }}
      />

      <Tabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',

          tabBarIcon: ({ color, size }) => (
            <Icon type="material" name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
