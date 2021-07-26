import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Countdown from './countdown'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Countdown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
});
