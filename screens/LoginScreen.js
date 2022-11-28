<<<<<<< Updated upstream
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
=======
import React, {Component, createContext, useState} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import InputLoginInfo from '../components/InputLoginInfo';
import SubmitButton from '../components/SubmitButton';
import {findPostById, findPostByTitle, findPostList, createPost, deletePost,
  postRangeUpdate, likeUpdate, createComments, deleteComments, isMyPost, isMyComments} from '../api/PostApi';
import {createUser, findUserById, addFollowing, findFollowingById, findFollowerById, countFollowing,
  countFollower, deleteFollowing, deleteFollower, duplicationId} from '../api/UserApi';
>>>>>>> Stashed changes

function LoginScreen(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  

  function signInSubmit() {
    const info = email;
    countFollower(info);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
<<<<<<< Updated upstream
      <Text style={styles.login}>로그인</Text>
      <GoogleSigninButton onPress={props.onGoogleButtonPress} />
=======
      <InputLoginInfo style={styles.InputUserInfo} setEmail={setEmail} setPassword={setPassword}/>
      <Text style={styles.로그인}>로그인</Text>
      <SubmitButton style={styles.submitButton} signInSubmit={signInSubmit}/>
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLogo: {
    height: 56,
  },
  InputUserInfo: {
    height: 110,
    alignSelf: 'center',
  },
  login: {
    height: 120,
    marginTop: 100,
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    width: 120,
    height: 54,
    marginTop: -226,
    alignSelf: 'center',
  },
  submitButton: {
    width: 100,
    height: 36,
    marginTop: 120,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default LoginScreen;
