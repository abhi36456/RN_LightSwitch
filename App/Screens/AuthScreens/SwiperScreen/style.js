import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import colors from '../../../Constants/Colors';
import { actuatedNormalize, Fonts } from '../../../utils';

const styles = StyleSheet.create({
    swiperImg: {
        height: hp("40%"),
        width: wp("60%"),
        alignSelf: 'center',
        borderRadius: 20,
    },
    swiperContiner: {
        alignSelf: "center",
        marginTop: hp('10%')
    },
    titleTxt: {
        marginTop: hp('5%'),
        fontSize: actuatedNormalize(24),
        color: colors.dark_purple,
        textAlign: 'center',
        fontFamily: Fonts.Bold
    },
    subTitleTxt: {
        marginTop: hp('2%'),
        fontSize: actuatedNormalize(15),
        color: colors.grey_Text,
        textAlign: 'center',
        alignSelf: 'center',
        width: wp('80%'),
        fontFamily: Fonts.Regular
    },
    dotView: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.dark_purple
    },

    alreadyAccountView: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: hp('3%')
    },
    alreadyTxt: {
        fontSize: actuatedNormalize(16),
        color: colors.grey_Text,
        textAlign: 'center',
        fontFamily: Fonts.Regular
    },
    signInTxt: {
        fontSize: actuatedNormalize(16),
        color: colors.dark_purple,
        textAlign: 'center',
        fontFamily: Fonts.Bold
    }
})
export default styles