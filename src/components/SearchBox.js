import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/core';
import { filterData } from '../global/Data';
import { filter } from 'lodash';

export default function SearchBox() {
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [TextInputFocussed, setTextInputFocussed] = useState(true);
  const textInput = useRef(0);
  const navigation = useNavigation();

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleUserSearch = text => {
    const result = filter(filterData, searchItem => {
      return contains(searchItem, text);
    });
    setData([...result]);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setmodalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            type="material"
            name="search"
            style={styles.searchIcon}
            iconStyle={{ marginLeft: 5 }}
            size={32}
          />
          <Text style={{ fontSize: 15 }}>What are you looking for ?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                duration={400}
                animation={TextInputFocussed ? 'fadeInRight' : 'fadeInLeft'}>
                <Icon
                  name={TextInputFocussed ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (TextInputFocussed) {
                      setmodalVisible(false);
                      setTextInputFocussed(true);
                    }
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: '90%' }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onChangeText={handleUserSearch}
                onFocus={() => setTextInputFocussed(true)}
                onBlur={() => setTextInputFocussed(false)}
              />
              <Animatable.View
                duration={400}
                animation={TextInputFocussed ? 'fadeInLeft' : ''}>
                <Icon
                  name={TextInputFocussed ? 'cancel' : null}
                  onPress={() => {
                    if (TextInputFocussed) {
                      setmodalVisible(false);
                      setTextInputFocussed(false);
                    }
                  }}
                  style={{ marginRight: -10 }}
                  type="material"
                  iconStyle={{ color: colors.grey3 }}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch();
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('RestaurantSearchResultScreen', {
                    item: item.name,
                  });
                  setmodalVisible(false);
                  setTextInputFocussed(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{ color: colors.grey2, fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: { fontSize: 24, padding: 5, color: colors.grey2 },

  view1: {
    height: 70,
    justifyContent: 'center',

    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: { fontSize: 24, padding: 5, color: colors.grey2 },
  modal: {
    flex: 1,
  },
});
