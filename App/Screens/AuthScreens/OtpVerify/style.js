import { Dimensions, StyleSheet, Platform } from 'react-native';
const window = Dimensions.get('window');
import constants from '../../../Constants/Colors';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../utils';
const { strings, colors, fonts, urls, PATH } = constants;
const styles = StyleSheet.create({
  titleTxt2: {
    fontSize: actuatedNormalize(20),
    fontFamily:Fonts.Bold,
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
});

export default styles;
