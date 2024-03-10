import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Exercise from './Exercise';
import { Footer } from "./Footer";
import { Stats } from './Stats';
import DoExercise from './DoExercise';
import Login from "./Login"


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/workout" element={<Exercise />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/start" element={<DoExercise />} />
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