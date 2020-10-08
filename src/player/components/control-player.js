import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ControlLayout = ({children}) => {
  return <View style={styles.fullscreen}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  fullscreen: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
