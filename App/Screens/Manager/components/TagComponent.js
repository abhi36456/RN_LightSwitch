import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from 'react-native-elements/dist/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { actuatedNormalize, colors, Fonts } from '../../../utils';

export const TagComponent = (props) => {
    return (
        <View style={{...styles.container,backgroundColor:props.backgroundColor,width:props.width}}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:9,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Regular,
        textAlign: 'center',
        // color: colors.white
    },
})
