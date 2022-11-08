import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function HeaderLogo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.picstagram}>Picstagram</Text>
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
    marginLeft: 20,
  },
});

export default HeaderLogo;
