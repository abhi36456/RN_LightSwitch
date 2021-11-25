import {Dimensions, StyleSheet, Platform} from 'react-native';
const window = Dimensions.get('window');
import constants from '../../../Constants/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
const {strings, colors, fonts, urls, PATH} = constants;
const styles = StyleSheet.create({
  titleTxt2: {
    fontSize: 20, color: constants.title_Colors, marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600', textAlign: 'center'
  },
  titleTxt: {
    fontSize: 30, color: 'black', marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600', textAlign: 'center'
  },
  subTitleTxt: { fontSize: 15, color: 'black', marginTop: hp('2%'), width: wp('50%'), alignSelf: 'center', textAlign: 'center' },
  textInputMainView: { flexDirection: 'row', alignSelf: 'center', width: wp('95%'), marginTop: hp('7%') },
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
  }
});

export default styles;
