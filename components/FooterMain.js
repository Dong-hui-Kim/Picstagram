import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function FooterMain(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <View style={styles.homeButtonRow}>
          <TouchableOpacity style={styles.homeButton}>
            <EntypoIcon name="home" style={styles.homeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraButton}>
            <EntypoIcon name="camera" style={styles.cameraIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton}>
            <EntypoIcon name="user" style={styles.myProfileIcon} />
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
  },
  group: {
    width: 360,
    height: 56,
    flexDirection: 'row',
  },
  homeButton: {
    width: 120,
    justifyContent: 'center',
  },
  homeIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    alignSelf: 'center',
  },
  cameraButton: {
    width: 120,
    justifyContent: 'center',
  },
  cameraIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    alignSelf: 'center',
  },
  profileButton: {
    width: 120,
  },
  myProfileIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    marginTop: 7,
    alignSelf: 'center',
  },
  homeButtonRow: {
    height: 56,
    flexDirection: 'row',
    flex: 1,
  },
});

export default FooterMain;
