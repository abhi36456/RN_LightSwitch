import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../Constants/Colors';
import { actuatedNormalize, Fonts } from '../../../utils';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
const styles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: 'white' },
    titleTxt: {
        fontSize: wp(8),
        color: 'black',
        marginTop: hp('3%'),
        width: wp('80%'),
        alignSelf: 'center',
        fontWeight: '600'
    },
    avtarViewImg: {
        height: wp('32%'),
        width: wp('32%'),
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: hp('5%')
    },
    avtarCameraIcon: {
        alignSelf: 'center',
        bottom: hp('4%'),
        height: hp('6%'),
        width: hp('6%'),
        left: wp('14%')
    },
    inputView: {
        backgroundColor: "#FFF",
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('2%')
    },
    rbSheetViewContainer: {
        width: wp(60),
        alignSelf: 'center',
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: actuatedNormalize(20),
    },
    rbSheetImage: {
        width: actuatedNormalize(55),
        height: actuatedNormalize(55),
        alignSelf: 'center'
    },
    rbSheetText: {
        fontFamily: Fonts.Bold,
        margin: actuatedNormalize(8),
        fontSize: actuatedNormalize(14)
    },
    row_input_container: {
        flexDirection: "row",
        marginTop: hp('2%'),
        alignSelf: "center"
    },
    txtContainer: {
        alignSelf: "center",
        marginTop: 8,
        marginRight: 8
    }
});
export default styles