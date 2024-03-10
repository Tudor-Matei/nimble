import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Register from './Register'; // Import the Register component


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginPressed, setIsLoginPressed] = useState(true);
  const [isRegisterPressed, setIsRegisterPressed] = useState(false);

  const handleRegisterPress = () => {
    setIsRegisterPressed(true);
    setIsLoginPressed(false);
  };

  const handleLoginPress = () => {
    setIsLoginPressed(true);
    setIsRegisterPressed(false);
  };

  const handleLogin = () => {
    console.log("request123")
    fetch('http://192.168.81.120:3001/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(response => {console.log(response); return response})
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log('Login successful');
      } else {
        console.log('Login failed:', data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });


    setIsLoginPressed(true);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/video.mp4')}
        style={styles.backgroundVideo}
        isLooping={true}
        isMuted={true}
        blurRadius={90}
        useNativeControls={false}
        shouldPlay={true}
        resizeMode='cover'
      />
          
      <Text style={styles.title}>Welcome to NIMBLE</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButton, isLoginPressed ? styles.pressedButton : null]} onPress={handleLoginPress} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.registerButton, isRegisterPressed ? styles.pressedButton : null]} onPress={handleRegisterPress} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {isLoginPressed ? <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
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
        <TouchableOpacity style={styles.logButton} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 
      </View> : <Register/>}
     
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B0A07',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F0EC57',
        marginBottom: 16,
        textDecorationColor: '#0B0A07',
      },
      
      
    description: {
      fontSize: 20,
      textAlign: 'center',
      color: '#F0EC57',
      marginBottom: 32,
    },
    formContainer: {
      width: '80%',
      filter: "blur(10px)"
    },
    backgroundVideo: {
    position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      opacity: 0.4,
    },
    input: {
      height: 50,
      borderColor: '#F0EC57',
      borderWidth: 3,
      borderRadius: 50,
      paddingHorizontal: 10,
      marginBottom: 16,
      backgroundColor: 'transparent',
      backgroundColor: 'rgba(255, 236, 87, 0.5)'
    },
    loginButton: {
      backgroundColor: '#F0EC57',
      paddingHorizontal: 20,
      paddingVertical: 10,
      paddingRight:28,
      paddingLeft: 20,
      borderTopLeftRadius: 20, 
      borderBottomLeftRadius: 20, 
    },
    logButton: {
      backgroundColor: '#E3D87E',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 20,
      alignSelf: 'center',
    },
    registerButton: {
      backgroundColor: '#F0EC57',
      paddingHorizontal: 20,
      paddingVertical: 10,
      paddingLeft: 20,
      borderTopRightRadius: 20, 
      borderBottomRightRadius: 20, 
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30,
    },
    buttonText: {
      color: '#5e5b08',
      fontSize: 21,
    },
    pressedButton: {
      backgroundColor: '#E3D87E', 
    },
  });
  
export default Login;