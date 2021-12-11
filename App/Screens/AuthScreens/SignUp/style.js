import { StyleSheet } from 'react-native';
import colors from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../utils';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white_Colors
  },
  titleTxt: {
    fontSize: actuatedNormalize(34),
    fontFamily: Fonts.Bold,
    color: colors.black_Text,
    marginTop: hp('8%'),
    width: wp('80%'),
    alignSelf: 'center',
  },

  subTitleTxt: {
    fontSize: actuatedNormalize(15),
    color: colors.light_black,
    marginTop: hp('1%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  inputText: {
    padding: 16,
    borderColor: colors.grey_Background,
    borderRadius: 12,
    borderWidth: 1.5,
    fontFamily: Fonts.Regular
  },
  inputImg: {
    height: hp("15%"),
    width: wp("80%"),
    alignSelf: 'center',
    marginTop: hp('5%')
  },
  viewWrapper: {
    alignSelf: "center",
    width: wp('80%'),
    marginTop: hp('5%')
  }
});

export default styles;
