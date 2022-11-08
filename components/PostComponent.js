import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PostProfile from './PostProfile';
import Feed from './Feed';
import UntitledComponent from './UntitledComponent';

function PostComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <PostProfile style={styles.postProfile} />
      <Feed style={styles.feed} />
      <UntitledComponent style={styles.postFooter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  postProfile: {
    height: 64,
    backgroundColor: '#fff',
  },
  feed: {
    height: 368,
  },
  postFooter: {
    height: 40,
    alignItems: 'center',
  },
});

export default PostComponent;
