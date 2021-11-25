import { Dimensions, StyleSheet, Platform } from 'react-native';
const window = Dimensions.get('window');
import constant from '../../../Constants/Colors';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
const styles = StyleSheet.create({

    titleTxt: {
        fontSize: 30, color: 'black', marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600',
    },
    subTitleTxt: { fontSize: 15, color: constant.grey_Text, marginTop: hp('2%'), width: wp('80%'), alignSelf: 'center', },
    flatListMainView: { width: wp('95%'), alignSelf: 'center', },

    mainView: { width: wp('90%'), alignSelf: 'center', marginTop: hp('2%'), },
    fbImg: { height: hp('8%'), width: wp('20%'), marginLeft: wp('7%'), marginTop: hp('2%'), alignSelf: 'center' },
    headerMainView: { width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('7%'), alignSelf: 'center', alignItems: 'center' },
    headerTitle: { color: constant.black_Text, fontSize: 20, fontWeight: '700' },
    headerSubTitle: { color: constant.title_Colors, fontSize: 15, },
    titleTxt: { marginTop: hp('5%'), width: wp('90%'), alignSelf: 'center', color: constant.title_Colors, fontWeight: '700', fontSize: 15 },
    rowView: { height: hp('6%'), marginTop: hp('5%') },
    inputContainer: { width: wp('90%'), height: hp('6%'), alignSelf: 'center', borderColor: constant.light_Grey, borderWidth: 1, borderRadius: 10, marginTop: hp('3%') },
    inputMainView: { width: wp('90%'), alignSelf: 'center' },

});

export default styles;
