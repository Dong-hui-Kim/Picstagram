import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

function HeaderMain(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.picstagramRow}>
        <Text style={styles.picstagram}>Picstagram</Text>
        <TouchableOpacity style={styles.addPostButton}>
          <FeatherIcon name="plus" style={styles.addPostIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <FeatherIcon name="search" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  picstagram: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  addPostButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginLeft: 190,
    alignSelf: 'center',
  },
  addPostIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  searchButton: {
    width: 30,
    height: 33,
    justifyContent: 'center',
    marginLeft: 10,
    alignSelf: 'center',
  },
  searchIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    alignSelf: 'center',
  },
  picstagramRow: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 11,
    marginLeft: 20,
    marginTop: 12,
  },
});

export default HeaderMain;
