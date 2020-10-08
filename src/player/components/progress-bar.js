import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import {ProgressBar as ProgressBarAndroid} from '@react-native-community/progress-bar-android';

export const ProgressBar = ({progress}) => {
  return (
    <View>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        style={styles.progressBar}
        indeterminate={false}
        progress={progress}
      />
      {/* {Platform.select({
        ios: (
          <ProgressBarViewIOS
            style={styles.progressBar}
            trackTintColor="light-gray"
            progress={progress}
          />
        ),
        android: (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            style={styles.progressBar}
            progress={1}
          />
        ),
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: 180,
    color: 'white',
  },
});
