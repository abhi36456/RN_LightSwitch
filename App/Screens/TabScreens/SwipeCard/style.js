import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../Utility/index"
import constant from "../../../Constants/Colors"
import React from 'react';
import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    mainView: { height: hp('50%'), marginTop: hp('10%') },
    iconMainView: { flexDirection: 'row', width: wp('30%'), alignSelf: 'center', marginTop: hp('5%'), justifyContent: 'space-between', alignItems: 'center' },
    swiperImage: { height: hp('50%'), width: wp('80%'), }
})
export default styles