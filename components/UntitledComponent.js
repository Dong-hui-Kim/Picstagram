import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.likeButtonRow}>
        <TouchableOpacity style={styles.likeButton}>
          <EntypoIcon name="heart-outlined" style={styles.likeIcon} />
          <View style={styles.likeIconFiller} />
          <Text style={styles.txtLikeCount}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton}>
          <FontAwesomeIcon name="comments-o" style={styles.commentIcon} />
          <View style={styles.commentIconFiller} />
          <Text style={styles.txtCommentCount}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  likeButton: {
    width: 60,
    flexDirection: 'row',
  },
  likeIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  likeIconFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  txtLikeCount: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    alignSelf: 'center',
  },
  commentButton: {
    width: 60,
    flexDirection: 'row',
    marginLeft: 20,
  },
  commentIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  commentIconFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  txtCommentCount: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    alignSelf: 'center',
  },
  likeButtonRow: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginRight: 200,
    marginLeft: 20,
  },
});

export default UntitledComponent;
