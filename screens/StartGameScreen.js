/** @format */

import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button
                        title='Reset'
                        onPress={() => {}}
                        color={Colors.accent}
                    />
                    <Button
                        title='Confirm'
                        onPress={() => {}}
                        color={Colors.primary}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    Button: {
        width: 100,
    },
})

export default StartGameScreen
