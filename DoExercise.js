import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';

const DoExercise = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const exerciseDetails = location.state;
  const interval = useRef(null);
  const [monitoredDetails, setMonitorDetails] = useState({ calories: -1, heart: -1, steps: -1 })
  useEffect(() => {
    interval.current = setInterval(() => {
      fetch("https://cooperative-vintage-friction.glitch.me/get-sensor-data", {
        method: "POST",
        body: JSON.stringify({ deviceID: 1234 }),
      }).then(r => r.json()).then(({ data }) => {
        console.log(data);
        setMonitorDetails({ calories: data[0].calories, heart: data[0].heart, steps: data[0].steps });
      }).catch((error) => console.error(error));
    }, 5000);

    return () => clearInterval(interval.current);
  }, []);

  return exerciseDetails === null ? navigate("/workout") :
    (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{exerciseDetails.title}</Text>
          <Text>{exerciseDetails.description}</Text>
          <Text style={styles.monitoring}>Monitoring activity...</Text>
          <Text style={styles.monitoring}>{
          [monitoredDetails.calories, monitoredDetails.heart, monitoredDetails.steps]
            .every(detail => detail === -1) ? "" :
            `${monitoredDetails.calories} calories, ${monitoredDetails.heart} BPM, ${monitoredDetails.steps} steps`}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => {
              if (monitoredDetails.calories < 50) return;

              clearInterval(interval.current);
              // TODO: register progress
              navigate("/stats");
            }} style={[styles.startButton, monitoredDetails.calories < 50 ? { opacity: 0.2 } : ({})]}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
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
  },

  monitoring: {
    marginTop: 50
  },

  buttonText: {
    color: '#5e5b08',
    fontSize: 21,
    fontWeight: 'bold',
  },

  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 25
  }
});

export default DoExercise;
