import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

function UpdatePostingFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.homeButtonRow}>
        <TouchableOpacity style={styles.homeButton}>
          <EntypoIcon name="home" style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <MaterialIconsIcon name="cancel" style={styles.cancelIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <EntypoIcon name="user" style={styles.userIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  homeButton: {
    width: 120,
    height: 56,
    justifyContent: 'center',
  },
  homeIcon: {
    color: 'rgba(0,0,0,1)',
    alignSelf: 'center',
    fontSize: 40,
  },
  cancelButton: {
    width: 120,
    height: 56,
    justifyContent: 'center',
  },
  cancelIcon: {
    color: 'rgba(208,2,27,1)',
    alignSelf: 'center',
    fontSize: 40,
  },
  profileButton: {
    width: 120,
    height: 56,
    justifyContent: 'center',
  },
  userIcon: {
    color: 'rgba(0,0,0,1)',
    alignSelf: 'center',
    fontSize: 40,
  },
  homeButtonRow: {
    height: 56,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
});

export default UpdatePostingFooter;
