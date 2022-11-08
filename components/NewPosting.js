import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function NewPosting(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Untitled')}
        style={styles.newPostingButton}>
        <View style={styles.newPostingIconRow}>
          <Icon name="plus-square" style={styles.newPostingIcon} />
          <Text style={styles.새게시물선택}>새 게시물 선택</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  newPostingButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
  },
  newPostingIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 73,
    height: 73,
    width: 73,
  },
  새게시물선택: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 28,
    width: 182,
    height: 38,
    marginLeft: 20,
    marginTop: 18,
  },
  newPostingIconRow: {
    height: 73,
    flexDirection: 'row',
    flex: 1,
    marginRight: 44,
    marginLeft: 22,
    marginTop: 46,
  },
});

export default NewPosting;
