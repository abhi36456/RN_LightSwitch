import React, { useState } from 'react';
import {

    StyleSheet
} from 'react-native';
import constants from '../../../Constants/Colors';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
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
    subTitleTxt: { fontSize: 15, color: 'black', marginTop: hp('1%'), width: wp('80%'), alignSelf: 'center', },
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
    inputText: {
        padding: 16,
        borderColor: constants.black_border,
        borderRadius: 7,
        borderWidth: 1,
        fontFamily: Fonts.Regular
    },
    viewWrapper: {
        alignSelf: "center",
        width: wp('80%'),
        marginTop: hp('2%')
    },
    img_add: {
        width: wp("4.5%"),
        height: wp("4.5%"),
        alignSelf: "center"
    },
    inner_row: {
        width: wp("70%"),
        alignSelf: "center",
        flexDirection: "row", justifyContent: "space-between"
    },
    paddder: {
        width: wp("30%"),
        padding: hp("1.5%"),
        borderRadius: 8,
        backgroundColor: constants.violate,
    },
    close_ic: {
        width: 16, height: 16,
        marginTop: -16,
        marginRight: -16,
        alignSelf: "flex-end"
    },
    black_regular: {
        fontSize: actuatedNormalize("12"),
        color: constants.white_Colors,
        fontFamily: Fonts.Regular,
    },
    header: {
        backgroundColor: constants.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 20
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 15 : 20 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignSelf: 'center',
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
    input_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 16,
        marginTop:hp(4)
    },
    txt_lbl: {
        color: constants.violate,
        fontSize: wp(5),
        fontFamily: Fonts.Bold,
        paddingLeft: 0
    },
    next_ic: {
        alignSelf: "center",
        width: wp("3%"),
        height: wp("3%")
    },
    txt_lbl_common: {
        color: constants.black_gray,
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Bold,
        padding: actuatedNormalize(6),
        paddingLeft: 0
    },
});
export default styles