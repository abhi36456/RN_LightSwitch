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
import colors from '../../../Constants/Colors';
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

    input_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 16,
        marginTop: hp(4)
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
    button_wrapper: {
        padding: 8,
        backgroundColor: colors.violate,
        width: wp("20%"),
        alignSelf: "center",
        borderRadius: 16,
        marginBottom: 10
    },
    txt_save: {
        fontFamily: Fonts.Bold,
        color: colors.white_Colors,
        textAlign: 'center',
        fontSize: actuatedNormalize(14)
    },
    suggestion_input: {
        padding: 16,
        borderColor: constants.black_border,
        borderRadius: 7,
        borderWidth: 1,
        fontFamily: Fonts.Regular,
        width: wp("80%"),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
export default styles