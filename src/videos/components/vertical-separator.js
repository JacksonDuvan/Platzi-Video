import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const VerticalSeparator = ({color, horizontal}) => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: color ? color : '#eaeaea',
          marginHorizontal: horizontal ? 10 : 0,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});
