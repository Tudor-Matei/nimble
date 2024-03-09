import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Footer } from './Footer';

const Exercise = ({ caloriesBurned, avgHeartRate, score }) => {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Workout Summary</Text>
      <View style={styles.stats}>
        <Text style={styles.stat}>Calories Burned: {caloriesBurned}</Text>
        <Text style={styles.stat}>Avg Heart Rate: {avgHeartRate} BPM</Text>
        <Text style={styles.stat}>Score: {score}</Text>
      </View>
      <View style={styles.exercises}>
        <TouchableOpacity style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 1</Text>
          <Text style={styles.exerciseDetails}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 2</Text>
          <Text style={styles.exerciseDetails}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercise 3</Text>
          <Text style={styles.exerciseDetails}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    width: '100%',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center content vertically
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#748067', // Green color
    padding:20,
  },
  stats: {
    marginBottom: 20,
    padding:20,
  },
  stat: {
    fontSize: 18,
    marginBottom: 10,
    color: '#748067', // Green color
  },
  exercises: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width:'90%',
    alignSelf:'center',
  },
  exerciseContainer: {
    padding: 20,
    width: '100%',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#BBCEA8', // White color
    elevation: 3,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', // Green color
  },
  exerciseDetails: {
    fontSize: 16,
    color: '#748067', // Green color
  },
});

export default Exercise;