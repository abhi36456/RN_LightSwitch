import { StyleSheet, Platform } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../utils';

const styles = StyleSheet.create({
  titleTxt2: {
    fontSize: actuatedNormalize(20),
    fontFamily: Fonts.Bold,
    color: constants.dark_purple,
    marginTop: hp('12%'),
    width: wp('80%'),
    alignSelf: 'center',
    textAlign: 'center'
  },
  titleTxt: {
    fontSize: actuatedNormalize(30),
    color: constants.black_Text,
    fontFamily: Fonts.Bold,
    marginTop: hp('8%'),
    width: wp('80%'),
    alignSelf: 'center',
    textAlign: 'center'
  },
  subTitleTxt: {
    fontSize: actuatedNormalize(15),
    color: constants.light_black,
    fontFamily: Fonts.Regular,
    marginTop: hp('2%'),
    width: wp('50%'),
    alignSelf: 'center',
    textAlign: 'center'
  },
  textInputMainView: {
    justifyContent: "center",
    flexDirection: 'row',
    alignSelf: 'center', width: wp('100%'), marginTop: hp('7%')
  },
  textInputView: {
    ...Platform.select({
      ios: {
        width: wp('18%',),
        fontSize: 30, height: hp('4%'),
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800'
      },
      android: {
        width: wp('18%',),
        fontSize: 30, height: hp('8%'),
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800'
      },
    }),
  },
  input_border: {
    borderColor: constants.dark_purple,
    borderWidth: 1,
    height: hp('8.5%'),
    width: wp('17%'),
    borderRadius: 12,
    marginLeft: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;
