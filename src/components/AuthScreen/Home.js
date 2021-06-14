import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Welcome to Home Page </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue"


    }
})

export default Home;