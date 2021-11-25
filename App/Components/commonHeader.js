import React, { Component } from 'react';
import {
    View, TouchableOpacity, StyleSheet,
    Text, Image, StatusBar, Platform
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../Utility/index';
import constants from '../Constants/Colors';
import { images } from '../Constants/images';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { actuatedNormalize, Fonts } from '../utils';


export const Header = ({ back_icons, onBackPress, headerText, right_side }) => {
    return (
        <>
            <StatusBar backgroundColor={constants.white_Colors} barStyle="dark-content" />
            <View style={styles.header}>
                <View style={styles.headerSubContainer}>
                    {back_icons ?
                        <TouchableOpacity
                            onPress={() => back_icons && onBackPress()}
                            style={styles.backWrapper}>
                            <Image
                                resizeMode={'contain'}
                                source={images.back_grey}
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        :
                        <View style={styles.backIcon}></View>
                    }
                    <Text style={[styles.headerText, { flex: 1 }]}>{headerText}</Text>
                    {
                        right_side &&
                        <Text style={styles.subheaderText}>Save</Text>
                    }

                </View>

            </View >
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: constants.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 15
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 10 : 16 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignSelf: 'center',
    },
    backWrapper: {
        justifyContent: 'center'
    },
    backIcon: {
        width: 34,
        height: 34,
        alignSelf: 'center'
    },
    rightIcon: {
        width: 26,
        height: 26,
        alignSelf: 'center'
    },
    headerText: {
        color: constants.black_Text,
        fontFamily: Fonts.Bold,
        fontSize: actuatedNormalize(25),
        alignSelf: 'center',
        textAlign: 'center'
    },
    subheaderText: {
        marginRight: 16,
        color: constants.violate,
        fontFamily: Fonts.Regular,
        fontSize: actuatedNormalize(20),
        alignSelf: 'center',
        textAlign: 'center'
    },
    divider: {
        height: 1,
        width: '100%',
    },
    topMargin: {
        marginTop: 10
    }

})