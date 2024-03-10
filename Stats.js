import { View, Text, StyleSheet } from "react-native"

export const Stats = () => {
    const completedExercises = [{
        title: "Exercise 1",
        winAmount: 30,
    },
    {
        title: "Exercise 2",
        winAmount: 30,
    },
    {
        title: "Exercise 3",
        winAmount: 30,
    }]
    return (
        <>
            <View style={styles.primaryStats}>
                <Text style={styles.stat}>Calories Burned: {0}</Text>
                <Text style={styles.stat}>Avg Heart Rate: {0} BPM</Text>
                <Text style={styles.stat}>Score: {0}</Text>
            </View>
            <Text style={styles.title}>Completed exercises</Text>
            <View style={{width: '90%'}}>
                {completedExercises.map((exercise, i) => (
                    <View key={`exercise_${i}`} style={styles.exerciseContainer}>
                        <Text style={styles.exerciseTitle}>{exercise.title}</Text>
                        <Text style={styles.exerciseDetails}>Won: {exercise.winAmount}</Text>
                    </View>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    primaryStats: {
        position: 'absolute',
        top: 60,
        marginBottom: 50,
        backgroundColor: 'rgba(227, 216, 126, 0.2)',
        width: '90%',
        padding: 20,
        borderRadius: 30
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
    stat: {
        fontSize: 18,
        marginBottom: 5,
        color: '#748067', // Green color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 20,
        marginTop: 100,
        color: '#748067', // Green color
        alignSelf: 'flex-start'
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
})