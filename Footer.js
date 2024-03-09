import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useNavigate } from 'react-router-native';


export const Footer = () => {
    const [selectedButton, setSelectedButton] = useState('Stats');

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const navigate = useNavigate();

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                style={[
                    styles.footerButton,
                    selectedButton === 'Stats' && styles.selectedButton,
                ]}
                onPress={
                    () => {
                        handleButtonPress('Stats');
                        navigate("/stats");
                    }
                }
            >
                <MaterialCommunityIcons
                    name="chart-box-outline"
                    size={25}
                    color={selectedButton === 'Stats' ? '#fff' : '#5e5b08'}
                />
                <Text style={[styles.footerButtonText, { color: selectedButton === 'Stats' ? '#fff' : '#5e5b08' }]}>Stats</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.footerButton,
                    selectedButton === 'Workout' && styles.selectedButton,
                ]}
                onPress={() => {
                    handleButtonPress('Workout');
                    navigate("/workout");
                }}
            >
                <MaterialCommunityIcons
                    name="dumbbell"
                    size={25}
                    color={selectedButton === 'Workout' ? '#fff' : '#5e5b08'}
                />
                <Text style={[styles.footerButtonText, { color: selectedButton === 'Workout' ? '#fff' : '#5e5b08' }]}>Workout</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={
                    () => {
                        handleButtonPress('Profile');
                        navigate("/");
                    }
                }
                style={[
                    styles.footerButton,
                    selectedButton === 'Profile' && styles.selectedButton,
                ]}>
                <View>
                    <MaterialCommunityIcons
                        name="account"
                        size={25}
                        alignSelf='center'
                        color={selectedButton === 'Profile' ? '#fff' : '#5e5b08'}
                    />
                    <Text style={[styles.footerButtonText, { color: selectedButton === 'Profile' ? '#fff' : '#5e5b08' }]}>Profile</Text>

                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'rgba(227, 216, 126, 0.2)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderColor: '#e3d87e',
        width: '90%',
        borderRadius: 35,
        overflow: 'hidden',
        marginBottom: 15,
        alignSelf: 'center',
    },
    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 10,
        width: 55,
    },
    footerButtonText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 12,
        color: '#5e5b08',
    },
    selectedButton: {
        backgroundColor: '#5e5b08',
    },
});
