import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { colors, parameters, title } from '../../global/styles';
import Header from '../../components/Header';

const SignInScreen = props => {
  const { navigation } = props;
  const [TextInput2Focused, setTextInput2Focused] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.textDescription}>
          Please enter email and password
        </Text>
        <Text style={styles.textDescription}>registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={TextInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              type="material"
              name="lock"
              iconStyle={{ color: colors.grey3 }}
            />
          </Animatable.View>
          <TextInput
            style={{ width: '80%' }}
            secureTextEntry
            placeholder="Enter password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => setTextInput2Focused(true)}
          />
          <Animatable.View
            animation={TextInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              type="material"
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('DrawerNav');
          }}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>
          Forgot password ?{' '}
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>OR</Text>
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
        />

        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.SocialIcon}
        />
      </View>

      <View style={{ marginTop: 15 }}>
        <Text style={{ ...styles.text1, marginLeft: 20 }}>
          New on XFood Delivery
        </Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
        <Button
          title="Create An Account"
          titleStyle={styles.createButtonTitle}
          buttonStyle={styles.createButton}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textDescription: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c43d7a',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#c43d7a',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
