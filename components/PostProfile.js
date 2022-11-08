import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function PostProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.profileButtonRow}>
        <TouchableOpacity style={styles.profileButton}>
          <EntypoIcon name="user" style={styles.profileIcon} />
        </TouchableOpacity>
        <Text style={styles.txtProfileUserId}>user_ID</Text>
        <TouchableOpacity style={styles.lockButton}>
          <FontAwesomeIcon name="lock" style={styles.lockIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.etcButton}>
          <EntypoIcon
            name="dots-three-horizontal"
            style={styles.postUpdateIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profileButton: {
    width: 30,
    height: 30,
  },
  profileIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  txtProfileUserId: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 18,
    marginTop: 7,
  },
  lockButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    marginLeft: 190,
  },
  lockIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    height: 30,
    width: 19,
    alignSelf: 'center',
  },
  etcButton: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  postUpdateIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  profileButtonRow: {
    height: 30,
    flexDirection: 'row',
    flex: 1,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 17,
  },
});

export default PostProfile;
