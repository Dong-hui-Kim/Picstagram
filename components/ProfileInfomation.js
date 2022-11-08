import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import UpdateProfileButton from './UpdateProfileButton';

function ProfileInfomation(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.userIconRow}>
        <Icon name="user" style={styles.userIcon} />
        <View style={styles.group}>
          <View style={styles.followerRow}>
            <View style={styles.follower}>
              <TouchableOpacity style={styles.followerCheckButton}>
                <Text style={styles.followerCount}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.followerFiller} />
            <View style={styles.following}>
              <TouchableOpacity style={styles.followingCheckButton}>
                <Text style={styles.followingCount}>0</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.팔로워Row}>
            <Text style={styles.팔로워}>팔로워</Text>
            <View style={styles.팔로워Filler} />
            <Text style={styles.팔로잉}>팔로잉</Text>
          </View>
        </View>
      </View>
      <UpdateProfileButton style={styles.updateProfileButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 60,
  },
  group: {
    width: 122,
    height: 63,
    marginLeft: 100,
  },
  follower: {
    width: 42,
    height: 40,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  followerCheckButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  followerCount: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 30,
    width: 18,
    height: 36,
    marginTop: 2,
    marginLeft: 12,
  },
  followerFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  following: {
    width: 42,
    height: 40,
  },
  followingCheckButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  followingCount: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 30,
    width: 18,
    height: 36,
    marginTop: 2,
    marginLeft: 12,
  },
  followerRow: {
    height: 40,
    flexDirection: 'row',
  },
  팔로워: {
    fontFamily: 'roboto-700',
    color: '#121212',
  },
  팔로워Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  팔로잉: {
    fontFamily: 'roboto-700',
    color: '#121212',
  },
  팔로워Row: {
    height: 18,
    flexDirection: 'row',
    marginTop: 5,
  },
  userIconRow: {
    height: 66,
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 40,
    marginRight: 58,
  },
  updateProfileButton: {
    height: 36,
    width: 320,
    marginTop: 14,
    alignSelf: 'center',
  },
});

export default ProfileInfomation;
