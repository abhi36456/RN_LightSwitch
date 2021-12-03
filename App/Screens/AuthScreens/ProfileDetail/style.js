import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import constants from '../../../Constants/Colors';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
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
    inputImg: { height: hp("15%"), width: wp("80%"), alignSelf: 'center', marginTop: hp('5%') },
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
    birthdayField: { width: wp('80%'), marginTop: hp('3%'), alignSelf: 'center', height: hp('7%'), borderRadius: 10, backgroundColor: '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    birthdayTxt: { marginLeft: wp('3%'), width: wp('60%'), color: constants.title_Colors, fontWeight: '800' },
    calendarMainView: { height: hp('60%'), backgroundColor: 'white', width: wp('100%'), alignSelf: 'center', bottom: 0, position: 'absolute', borderTopEndRadius: 50, borderTopStartRadius: 50 },
    calendarTheme: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: 'red',
        selectedDayTextColor: '#ffffff',
        todayTextColor: constants.title_Colors,
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: constants.grey_Text,
        disabledArrowColor: '#d9e1e8',
        monthTextColor: constants.title_Colors,
        indicatorColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
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
});
export default styles