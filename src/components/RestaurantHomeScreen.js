import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RestaurantHeader from './RestaurantHeader';

export default function RestaurantHomeScreen({ navigation, route }) {
  const { id, restaurant } = route.params;
  return (
    <View>
      <RestaurantHeader id={id} />
    </View>
  );
}

const styles = StyleSheet.create({});
