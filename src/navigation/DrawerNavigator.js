import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClientTabNavigator from './ClientTabNavigator';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import BusinessConsoleScreen from './BusinessConsoleScreen';
import UserProfileDrawerContent from '../components/UserProfileDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <UserProfileDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="ClientTabNav"
        component={ClientTabNavigator}
        options={{
          title: 'Client',
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Business ConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business Console',
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
