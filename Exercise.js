import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { useNavigate } from 'react-router-native';

const Exercise = ({ caloriesBurned, avgHeartRate, score }) => {
  

  const [selectedExerciseIndex, setExerciseIndex] = useState(-1);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkouts();
    fetchWExercises();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await fetch('http://192.168.81.120:3001/api/workouts');
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const fetchWExercises = async () => {
    try {
      const response = await fetch('http://192.168.81.120:3001/api/exercises');
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const getExercisesForWorkout = (workoutId) => {
    return exercises.filter((exercise) => exercise.idworkout === workoutId);
  };

  return (
    <View style={styles.container}>
      {workouts.map((workout, index) => (
        <View key={`workout_${index}`} style={styles.content}>
          <Text style={styles.title}>{workout.name}</Text>
          <View style={styles.exercises}>
            {getExercisesForWorkout(workout.idworkout).map((exercise, i) => (
              <TouchableOpacity
                onPress={() => setExerciseIndex(i)}
                key={`exercise_${i}`}
                style={styles.exerciseContainer}
              >
                <Text style={styles.exerciseTitle}>{exercise.type}</Text>
                <Text style={styles.exerciseDetails}>Reward: {exercise.price}</Text>
                {selectedExerciseIndex === i ? (
                  <Button onPress={() => navigate("/start", { state: exercises[selectedExerciseIndex] })}
                    style={{ marginTop: 30 }}
                    title='Go'
                  />
                ) : (
                  ""
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
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
    borderRadius: 45,
    borderColor: '#BBCEA8', // White color
    borderWidth: 3
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

export default Exercise;