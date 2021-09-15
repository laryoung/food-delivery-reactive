import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

import { colors, parameters, title } from '../../global/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AuthWelcomeScreen = props => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          LOCATE RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          NEAR YOU
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://newsghana.com.gh/wp-content/uploads/2021/01/restaurant-e1611739812368.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.phillymag.com/wp-content/uploads/sites/3/2020/05/alpen-rose-burger.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://3.imimg.com/data3/CU/RW/MY-2779955/main-course-500x500.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="CREATE AN ACCOUNT"
            titleStyle={styles.createButtonTitle}
            buttonStyle={styles.createButton}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthWelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
