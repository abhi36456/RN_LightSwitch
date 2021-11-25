import React, { useState } from 'react';
import {

    StyleSheet
} from 'react-native';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
const styles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: 'white' },
    titleTxt: { fontSize: 27, color: 'black', marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600' },
    subTitleTxt: { fontSize: 15, color: 'black', marginTop: hp('1%'), width: wp('80%'), alignSelf: 'center', },
    inputImg: { height: hp("15%"), width: wp("80%"), alignSelf: 'center', marginTop: hp('5%') },
    avtarViewImg: { height: hp('10%'), width: hp('20%'), alignSelf: 'center', borderRadius: 10, marginTop: hp('5%') },
    avtarCameraIcon: { alignSelf: 'center', bottom: hp('3%'), backgroundColor: constants.white_Colors, borderRadius: 10, left: hp('3%') },
    inputView: { width: wp('80%'), alignSelf: 'center', color: 'red', marginTop: hp('3%') },
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
    }
});
export default styles