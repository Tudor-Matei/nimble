import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {Footer} from './Footer';
import Exercise from './Exercise';
import Blank from './Blank';

export const Start = () => {
  const [selectedButton, setSelectedButton] = useState('Stats');

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Are you ready for this challenge?</Text>
        <TouchableOpacity
          style={[styles.startButton, isStartPressed ? styles.pressedButton : null, buttonStyle]}
          onPress={handleStartPress}
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>

      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between', // Aligns items with equal space between them
        width: '100%'
      },
      content: {
        flex: 1, // Take up remaining space
        justifyContent: 'center', // Center content vertically
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
    width:'50%', 
    alignSelf:'center',
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

export default Start;