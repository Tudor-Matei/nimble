import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Footer = () => {
  const [selectedButton, setSelectedButton] = useState('Stats');

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={[
          styles.footerButton,
          selectedButton === 'Stats' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Stats')}
      >
        <MaterialCommunityIcons
          name="chart-box-outline"
          size={30}
          color={selectedButton === 'Stats' ? '#fff' : '#5e5b08'}
        />
        <Text style={[styles.footerButtonText, { color: selectedButton === 'Stats' ? '#fff' : '#5e5b08' }]}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.footerButton,
          selectedButton === 'Workout' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Workout')}
      >
        <MaterialCommunityIcons
          name="dumbbell"
          size={30}
          color={selectedButton === 'Workout' ? '#fff' : '#5e5b08'}
        />
        <Text style={[styles.footerButtonText, { color: selectedButton === 'Workout' ? '#fff' : '#5e5b08' }]}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.footerButton,
          selectedButton === 'Profile' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Profile')}
      >
        <MaterialCommunityIcons
          name="account"
          size={30}
          color={selectedButton === 'Profile' ? '#fff' : '#5e5b08'}
        />
        <Text style={[styles.footerButtonText, { color: selectedButton === 'Profile' ? '#fff' : '#5e5b08' }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'rgba(227, 216, 126, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 4,
    borderColor: '#e3d87e',
    width: '96%',
   borderRadius:35,
   // Make it round
    overflow: 'hidden', // Hide overflow when rounding
    marginBottom: 7,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20, // Make it round
  },
  footerButtonText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    color: '#5e5b08',
  },
  selectedButton: {
    backgroundColor: '#5e5b08', // Change background color when selected
  },
});
