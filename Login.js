import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Register from './Register'; // Import the Register component
import { BlurView } from 'expo-blur';

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
          
      <Text style={styles.title}>Welcome</Text>
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
        <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 
      </View> : <Register/>}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
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
    
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight:28,
    paddingLeft:20,
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20, 
  },
  logButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop:20,
    alignSelf: 'center',
  },
  registerButton: {
    backgroundColor: '#E3D87E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingLeft:20,
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#E3D87E',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  pressedButton: {
    backgroundColor: '#a39a4d', 
  },
});

export default Login;