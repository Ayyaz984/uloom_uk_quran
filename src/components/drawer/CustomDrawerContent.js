import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{height: 200, width: '100%'}}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{height: 200, width: '100%', marginTop: -4}}
          />
        </View>

        <DrawerItem
          label="Juz (Chapters)"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="book" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Surah"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="book" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Bookmarks"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="bookmark" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="star" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Tajweed Rules"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="list" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="About us"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="information-circle" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Instructions"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="help" size={25} color="#000000" />
          )}
        />
        <DrawerItem
          label="Rate us on Play store"
          labelStyle={styles.itemLabel}
          icon={({focused, size, color}) => (
            <Ionicons name="create" size={25} color="#000000" />
          )}
        />
      </DrawerContentScrollView>
      <View style={styles.socialIcons}>
        <Ionicons name="globe-outline" size={25} color="#000000" />
        <Ionicons name="logo-facebook" size={25} color="#000000" />
        <Ionicons name="logo-instagram" size={25} color="#000000" />
        <Ionicons name="logo-twitter" size={25} color="#000000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    marginVertical: -10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },
});

export default CustomDrawerContent;
