import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialCommunityIcons name="chart-box-outline" size={30} color="#5e5b08" />
        <Text style={styles.footerButtonText}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialCommunityIcons name="dumbbell" size={30} color="#5e5b08" />
        <Text style={styles.footerButtonText}>Workout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <MaterialCommunityIcons name="account" size={30} color="#5e5b08" />
        <Text style={styles.footerButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#e3d87e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
   
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    color: '#5e5b08',
  },
});
