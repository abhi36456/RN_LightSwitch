import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DummyScreen = () => {
    return (
        <View style={styles.container}>
            <Text> In Progress </Text>
        </View>
    )
}

export default DummyScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignSelf:'center'
    }
})
