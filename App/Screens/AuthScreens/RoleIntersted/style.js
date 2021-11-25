import { Dimensions, StyleSheet, Platform } from 'react-native';
const window = Dimensions.get('window');
import constants from '../../../Constants/Colors';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
const { strings, colors, fonts, urls, PATH } = constants;
const styles = StyleSheet.create({

    titleTxt: {
        fontSize: 30, color: 'black', marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600',
    },
    subTitleTxt: { fontSize: 15, color: constants.grey_Text, marginTop: hp('2%'), width: wp('80%'), alignSelf: 'center', },
    flatListMainView: { width: wp('95%'), alignSelf: 'center' },
});

export default styles;
