import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from 'react-native-elements/dist/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { actuatedNormalize, colors, Fonts } from '../../../utils';
import Feather from 'react-native-vector-icons/Feather'; //trending-up
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //dumbbell hand-heart star-circle-outline
import { windowWidth } from '../../../Constants';

const stock = <Feather name="trending-up" size={26} color={'#3973ED'} />
const home = <Octicons name="home" size={26} color={'#3973ED'} />
const dumbbell = <MaterialCommunityIcons name="dumbbell" size={26} color={'#3973ED'} />
const community = <MaterialCommunityIcons name="hand-heart" size={26} color={'#3973ED'} />
const equipment = <MaterialCommunityIcons name="star-circle-outline" size={26} color={'#3973ED'} />

export const CultureComponent = ({item,width}) => {
    const {text, icon} = item
    return (
        <View style={{...styles.container,width:width}}>
            <View style={styles.icon}>
                {icon == 'home' ? home: icon == 'stock'? stock: icon == 'dumbbell'? dumbbell: icon == 'community'? community: icon == 'equipment' ? equipment : null}
            </View>
            <Text style={{...styles.text,width:windowWidth*0.3}} numberOfLines={2}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 15,
        margin: 5
    },
    text:{
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Medium,
        textAlign: 'center',
        marginLeft: 10
        // color: colors.white
    },
    icon:{
        height: 40,
        width: 40, 
        borderRadius: 5,
        borderColor: '#E0E8F6',
        backgroundColor: '#F4F8FE',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderWidth: 1
        // #3973ED
    }
})
