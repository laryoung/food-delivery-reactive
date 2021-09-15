import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthWelcomeScreen from '../screens/authscreens/AuthWelcomeScreen';
import SignInScreen from '../screens/authscreens/SignInScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const AuthStack = createNativeStackNavigator();

const AuthNavigators = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AuthWelcomeScreen"
        component={AuthWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="DrawerNav"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="RestaurantsMap"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigators;
