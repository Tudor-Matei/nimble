import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

export const Exercise = () => {
  const exercises = [{
    title: "Exercise 1",
    winAmount: 30,
    description: "2 sets, 10 repetitions"
  }, {
    title: "Exercise 2",
    winAmount: 30,
    description: "2 sets, 10 repetitions"
  },
  {
    title: "Exercise 3",
    winAmount: 30,
    description: "2 sets, 10 repetitions"
  },
  ];

  const [selectedExerciseIndex, setExerciseIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Available exercises</Text>
        <View style={styles.exercises}>
          {exercises.map((exercise, i) => (
            <TouchableOpacity onPress={() => setExerciseIndex(i)} key={`exercise_${i}`} style={styles.exerciseContainer}>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseDetails}>reward: {exercise.winAmount}</Text>
              {selectedExerciseIndex === i ? <Button onPress={() => navigate("/start", { state: exercises[selectedExerciseIndex] })} style={{ marginTop: 30 }} title='go'>Go</Button> : ""}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#748067',
    padding: 20,
  },
  stats: {
    marginBottom: 20,
    padding: 20,
  },

  exercises: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
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
  title: {
    color: '#748067',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 30,
    marginLeft: 20
  }
});