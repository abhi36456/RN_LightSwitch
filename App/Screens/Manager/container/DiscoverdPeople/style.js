import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../../Utility/index"
import constant from "../../../../Constants/Colors"
import React from 'react';
import { StyleSheet, } from 'react-native';
import { actuatedNormalize, colors, Fonts } from "../../../../utils";
const styles = StyleSheet.create({
    mainView: {
        height: hp('64%'),
        marginTop: 16,
    },
    iconMainView: {
        flexDirection: 'row',
        width: wp('30%'),
        alignSelf: 'center',
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    swiperImage: {
        height: hp('50%'),
        width: wp('80%'),
    },
    bold_title: {
        fontSize: actuatedNormalize("22"),
        color: colors.violate,
        marginBottom: 2,
        fontFamily: Fonts.Bold,
    },
    bold_regular: {
        fontSize: actuatedNormalize("18"),
        color: colors.black,
        marginBottom: 4,
        fontFamily: Fonts.Bold,
    },
    blue_regular: {
        fontSize: actuatedNormalize("16"),
        color: "#0094FF",
        fontFamily: Fonts.Italic,
    },
    black_regular: {
        fontSize: actuatedNormalize("12"),
        color: colors.white,
        fontFamily: Fonts.Regular,
    },
    flex_row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    paddder: {
        width: wp("30%"),
        padding: hp("1.5%"),
        borderRadius: 8,
        backgroundColor: colors.violate,
    },
    buttonView: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: '#00000029',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: { height: 4, width: 0 },
    },
    img_ic: {
        height: wp("3.2%"),
        width: wp("3.2%"),
        alignSelf: "center"
    },
    img_star: {
        height: wp("4%"),
        width: wp("4%"),
        alignSelf: "center"
    },
    slider_view: {
        borderColor: "#7165FF",
        borderWidth: 2,
        width: wp("80%"),
        borderRadius: 15,
        padding: wp("6%")
    }
})
export default styles