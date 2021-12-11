import { StyleSheet } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';

const styles = StyleSheet.create({
  logoImg: {
    height: hp("20%"),
    width: wp("45%"),
    alignSelf: 'center',
    marginTop: hp('10%')
  },
  signUpTxt: {
    fontSize: 19,
    color: constants.black_Text,
    textAlign: 'center',
    marginTop: hp('5%')
  },
  container: {
    backgroundColor: constants.white_Colors,
    flex: 1
  }
});

export default styles;
