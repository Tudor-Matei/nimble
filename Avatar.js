import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, useWindowDimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { Footer } from './Footer';

const Avatar = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.iconBox, { width: width * 0.8 }]}>
        <TouchableOpacity onPress={() => { /* Handle onPress for hat icon */ }}>
          <MaterialCommunityIcons name="hat-fedora" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle onPress for tshirt icon */ }}>
          <FontAwesome5 name="tshirt" size={24} color="black" style={[styles.icon, styles.margin]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle onPress for man icon */ }}>
          <Entypo name="man" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle onPress for shoe icon */ }}>
          <FontAwesome5 name="shoe-prints" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end' ,
    alignItems: 'center',
  },
  iconBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // Align icons to the right
    height: 750
  },
  icon: {
    marginBottom: 10, // Adjust spacing between icons
  },
  margin: {
    marginTop: 10, // Adjust spacing between icons
  },
});

export default Avatar;