import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './Login';
import Start from './Start';
import Exercise from './Exercise';
import Avatar from './Avatar';
import { Footer } from "./Footer";
import { Stats } from './Stats';



export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Avatar />} />
          <Route path="/workout" element={<Exercise />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </View>
    <Footer />

    </NativeRouter>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
