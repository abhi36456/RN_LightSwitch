import { StyleSheet } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';

const styles = StyleSheet.create({
    swiperImg: {
        height: hp("35%"),
        width: wp("60%"),
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: hp('5%')
    },
    titleTxt: {
        marginTop: hp('4%'),
        fontSize: wp(6),
        color: constants.black_Text,
        textAlign: 'center',
    },
    subTitleTxt: {
        marginTop: hp('2%'),
        fontSize: 15,
        color: constants.grey_Text,
        textAlign: 'center',
        alignSelf: 'center',
        width: wp('80%')
    },
    mainView: {
        flex: 1,
        backgroundColor: constants.white_Colors
    }
})

export default styles;