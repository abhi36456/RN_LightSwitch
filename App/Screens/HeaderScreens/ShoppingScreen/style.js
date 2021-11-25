import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../Utility/index"
import constant from "../../../Constants/Colors"
import React from 'react';
import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({

    iconMainView: { flexDirection: 'row', width: wp('30%'), alignSelf: 'center', marginTop: hp('5%'), justifyContent: 'space-between', alignItems: 'center' },
    swiperImage: { height: hp('50%'), width: wp('80%'), },
    cardMainView: { width: wp('80%'), alignSelf: 'center', borderRadius: 10, borderWidth: 1, borderColor: constant.grey_Text, marginTop: hp('5%') },
    cardHeaderMainView: { flexDirection: 'row', justifyContent: 'flex-start', width: wp('70%'), alignSelf: 'center', marginTop: hp('2%') },
    cardHeaderImg: { height: hp('5%'), width: hp('5%'), borderRadius: 100, bottom: hp('1%') },
    cardHeaderSubView: { flexDirection: 'row', justifyContent: 'space-between', width: wp('70%'), alignSelf: 'center', marginTop: hp('2%') },
    cardTxtSubView: { marginLeft: wp('2%'), fontSize: 20, fontWeight: '800' },
    cardHeaderSubImg: { height: hp('5%'), width: hp('5%'), borderRadius: 100, bottom: hp('1%') },
    uberTxt: { marginLeft: wp('2%'), width: wp('70%'), alignSelf: 'center', },
    locationBtnView: {
        width: wp('30%'), height: hp('3%'), alignItems: 'center', backgroundColor: constant.light_Grey,
        marginLeft: hp('2%'), marginTop: hp('2%'), borderRadius: 7,
        justifyContent: 'space-evenly', flexDirection: 'row'
    },
    locationBtnTxt: { marginLeft: wp('2%'), alignSelf: 'center', },
    subTitleTxtView: { flexDirection: 'row', justifyContent: 'flex-start', width: wp('70%'), alignSelf: 'center', marginTop: hp('2%'), alignItems: 'center' },
    subTitleTxt: { marginLeft: wp('3%'), color: constant.grey_Text, fontSize: 18 },
    playBackImg: { height: hp('20%'), width: wp('75%'), alignSelf: 'center', marginTop: hp('3%'), marginBottom: hp('5%') }

})
export default styles