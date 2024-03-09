import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Footer } from './Footer';

const DoExercise = () => {
  const [isStartPressed, setIsStartPressed] = useState(false);

  const handleStartPress = () => {
    setIsStartPressed(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Text style={styles.title}>TIMER/REP</Text>
        <TouchableOpacity
          style={[styles.startButton, isStartPressed ? styles.pressedButton : null]}
          onPress={handleStartPress}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.startButton, isStartPressed ? styles.pressedButton : null]}
        >
          <Text style={styles.buttonText}>Couldn't do it lol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 300,
  },
  startButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#5e5b08',
    fontSize: 21,
    fontWeight: 'bold',
  },
  pressedButton: {
    backgroundColor: '#E3D87E',
  },
});

export default DoExercise;
