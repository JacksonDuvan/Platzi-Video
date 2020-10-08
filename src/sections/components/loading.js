import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <ActivityIndicator color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 10,
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
