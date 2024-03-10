import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  const handleRegister = () => {
    if (password !== confirmpassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password
    };

    fetch('http://192.168.64.51:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed:', data.message);
        Alert.alert('Registration failed', data.message);
      }
    })
    .catch(error => {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'Failed to register. Please try again later.');
    });
  };

  return (
      <View style={styles.formContainer}>
         <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmpassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0A07',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0EC57',
    marginBottom: 16,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#F0EC57',
    borderWidth: 3,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 236, 87, 0.5)',
  },

  loginButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight: 28,
    paddingLeft: 20,
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20, 
  },
  registerButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 21,
  },
  pressedButton: {
    backgroundColor: '#F0EC57', 
  },
});
export default Register;