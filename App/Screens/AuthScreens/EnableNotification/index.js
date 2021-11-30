import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from '../../../Components/Buttons';
import { images } from '../../../Constants/images';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { Fonts } from '../../../utils';
import colors from '../../../Constants/Colors';

const EnableNotification = ({ navigation }) => {

    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <View style={styles.headerSubContainer}>

                    <Text style={{
                        flex: 1,
                        textAlign:"right",
                        fontFamily: Fonts.Regular,
                        color:colors.purple_Color
                    }}>
                        Skip
                    </Text>
                </View>
            </View>
            <Image
                source={images.chat} style={styles.swiperImg}
                resizeMode={'contain'}
            />
            <Text style={styles.titleTxt}>Enable notification’s </Text>
            <Text style={styles.subTitleTxt}>
                Get push-notification when hiring managers and connections message you. Highly suggested for full experience.
            </Text>
            <Buttons title={'I want to be notified'} btnColor={constants.dark_purple} buttonTop={hp('20%')} click={() => navigation.navigate('BottomTab')}></Buttons>
        </View>
    );
};

export default React.memo(EnableNotification);

const styles = StyleSheet.create({
    swiperImg: {
        height: hp("35%"),
        width: wp("60%"), alignSelf: 'center', borderRadius: 20, marginTop: hp('5%')
    },
    titleTxt: {
        marginTop: hp('4%'),
        fontSize: wp(6), color: constants.black_Text, textAlign: 'center', fontWeight: '800'
    },
    subTitleTxt: {
        marginTop: hp('2%'),
        fontSize: 15, color: constants.grey_Text,
        textAlign: 'center', alignSelf: 'center', width: wp('80%')
    },
    mainView: { flex: 1, backgroundColor: constants.white_Colors },
    header: {
        backgroundColor: constants.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 25
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 20 : 25 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignItems: "flex-end"
    },
    backWrapper: {
        justifyContent: 'center',
        borderRadius: 12,
        borderColor: constants.grey_Background,
        borderWidth: 1,
        marginLeft: 16,
        padding: 16,
    },
    backIcon: {
        width: 15,
        height: 15,
        tintColor: constants.dark_purple,
        alignSelf: 'center'
    },
})