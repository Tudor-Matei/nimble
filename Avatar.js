import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Avatar = () => {
  
  return (
    <View style={styles.container}>
      <Image source={require("./assets/animal_adult.png")} style={styles.logoImage}/>
      <View style={styles.userInfo}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoImage: {
      height:'60%',
    resizeMode: "contain"  
      
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
});

export default Avatar;
