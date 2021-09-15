import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigators from './AuthNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigators />
    </NavigationContainer>
  );
}
