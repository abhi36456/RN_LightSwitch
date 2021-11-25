import {Dimensions, StyleSheet, Platform} from 'react-native';
const window = Dimensions.get('window');
import constants from '../../../Constants/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
const {strings, colors, fonts, urls, PATH} = constants;
const styles = StyleSheet.create({
  logoImg: { height: hp("15%"), width: wp("40%"), alignSelf: 'center', marginTop: hp('10%') },
  signUpTxt: { fontSize: 19, fontWeight: '500', color: 'black', textAlign: 'center', marginTop: hp('5%') },
  phoneTxt: { fontSize: 17, fontWeight: '600', color: constants.title_Colors, textAlign: 'center', marginTop: hp('5%') },
  signupWithView: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: hp('5%') },
  borderLine: { borderBottomColor: 'black', borderBottomWidth: 1, width: wp('20%'), marginRight: wp('4%') },
  borderLineRight: { borderBottomColor: 'black', borderBottomWidth: 1, width: wp('20%'), marginLeft: wp('4%') },
  signupWithTxt: { fontSize: 17, color: 'black', textAlign: 'center', },
  socialView: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: hp('10%'), justifyContent: 'space-around', width: wp('80%') },
  termPolicyView: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: hp('5%'), justifyContent: 'space-between', width: wp('80%') },
  termPolicyTxt: { fontSize: 17, color: constants.title_Colors, textAlign: 'center', }


});

export default styles;
