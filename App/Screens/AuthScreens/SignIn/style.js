import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import colors from '../../../Constants/Colors';
import { Fonts } from '../../../utils';
const styles = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: colors.white_Colors },
    titleTxt: {
        fontSize: wp(8),
        color: colors.black_Text,
        marginTop: hp('3%'),
        width: wp('80%'),
        alignSelf: 'center',
        fontFamily: Fonts.Bold
    },
    inputView: {
        backgroundColor: colors.white_Colors,
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('2%')
    }
});
export default styles