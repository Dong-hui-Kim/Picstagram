import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function ProfileHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.backButtonRow}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="cross" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Title</Text>
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
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  backIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    marginLeft: 21,
    marginTop: 2,
  },
  backButtonRow: {
    height: 30,
    flexDirection: 'row',
    flex: 1,
    marginRight: 259,
    marginLeft: 9,
  },
});

export default ProfileHeader;
