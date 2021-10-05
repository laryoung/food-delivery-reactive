import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';
import RestaurantHomeScreen from '../components/RestaurantHomeScreen';

const ClientSearch = createNativeStackNavigator();

export default function ClientStack() {
  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchRScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="RestaurantSearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}

const styles = StyleSheet.create({});
