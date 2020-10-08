import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export const Layout = ({video, loader, loading, controls}) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{video}</View>
      <View style={styles.overlay}>{loading && loader}</View>
      {controls}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  fullscreen: {
    // paddingTop: '56.25%',
    // position: 'relative',
    // left: 0,
    // top: 0,
    // right: 0,
    // bottom: 0,
    // paddingTop: '56.25%',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
