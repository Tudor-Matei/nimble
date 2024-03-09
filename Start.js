import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Start = () => {
  const [isStartPressed, setIsStartPressed] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300, 
      delay: 1000, 
      useNativeDriver: true,
    }).start();
  }, []);

  const handleStartPress = () => {
    setIsStartPressed(true);
  };

  const buttonStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.01, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you ready for today's challenge?</Text>
      <TouchableOpacity
        style={[styles.startButton, isStartPressed ? styles.pressedButton : null, buttonStyle]}
        onPress={handleStartPress}
      >
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', 
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#5e5b08',
    fontSize: 21,
  },
  pressedButton: {
    backgroundColor: '#F0EC57',
  },
});

export default Start;
