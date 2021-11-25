import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../Utility/index"
import constant from "../../../Constants/Colors"
import React from 'react';
import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    titleImg: { height: hp('50%'), width: wp('100%') },
    mainView: { width: wp('90%'), alignSelf: 'center', },
    titleTxt: { color: constant.title_Colors, fontSize: 16, fontWeight: '700', marginTop: hp('3%') },
    subTitleTxt: { color: constant.black_Text, fontSize: 16, marginTop: hp('3%') },
    subTitleCard: { flexDirection: 'row', alignItems: "center", marginTop: hp('3%') },
    cardTitle: { color: constant.black_Text, fontSize: 16, fontWeight: '700', },
    cardSubtileTxt: { color: constant.black_Text, fontSize: 14, },
    logoImg: { height: hp('5%'), width: wp('15%') },

})
export default styles