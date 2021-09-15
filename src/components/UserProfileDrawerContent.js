import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Switch,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Avatar, Button, Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function UserProfileDrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: colors.buttons,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.buttons,
              alignItems: 'center',
              paddingLeft: 15,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                Rich Lamar
              </Text>
              <Text
                style={{
                  color: colors.cardbackground,
                  fontSize: 14,
                }}>
                richon100@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.headerFavoriteView}>
                <Text style={{ ...styles.headerFavoriteText, fontSize: 18 }}>
                  1
                </Text>
                <Text style={{ ...styles.headerFavoriteText, fontSize: 14 }}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.headerFavoriteView}>
                <Text style={{ ...styles.headerFavoriteText, fontSize: 18 }}>
                  0
                </Text>
                <Text style={{ ...styles.headerFavoriteText, fontSize: 14 }}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
          <Text style={styles.preferencesText}>Preferences</Text>

          <View style={styles.switchThemeView}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={{ paddingRight: 10 }}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={'#f4f3f4'}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardbackground,
  },
  headerFavoriteView: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerFavoriteText: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  preferencesText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchThemeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
