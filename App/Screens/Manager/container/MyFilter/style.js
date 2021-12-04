import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../../../Constants/Colors';
const window = Dimensions.get('window');
import constant from '../../../../Constants/Colors';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
const styles = StyleSheet.create({

    flatListMainView: { width: wp('95%'), alignSelf: 'center', },

    mainView: { width: wp('90%'), alignSelf: 'center', marginTop: hp('2%'), },
    fbImg: { height: hp('8%'), width: wp('20%'), marginLeft: wp('7%'), marginTop: hp('2%'), alignSelf: 'center' },
    headerMainView: { width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('7%'), alignSelf: 'center', alignItems: 'center' },
    headerTitle: { color: constant.black_Text, fontSize: 20, fontWeight: '700' },
    headerSubTitle: { color: constant.title_Colors, fontSize: 15, },
    titleTxt: {
        alignSelf: 'center',
        color: constant.violate,
        fontFamily: Fonts.Bold,
        fontSize: actuatedNormalize(20)
    },
    black_regular: {
        fontSize: actuatedNormalize("12"),
        color: colors.white_Colors,
        fontFamily: Fonts.Regular,
    },
    flex_row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    paddder: {
        width: wp("30%"),
        padding: hp("1.5%"),
        borderRadius: 8,
        backgroundColor: colors.violate,
    },
    rowView: { height: hp('6%'), marginTop: hp('5%') },
    inputContainer: { width: wp('90%'), height: hp('6%'), alignSelf: 'center', borderColor: constant.light_Grey, borderWidth: 1, borderRadius: 10, marginTop: hp('3%') },
    inputMainView: { width: wp('90%'), alignSelf: 'center' },
    img_animated: {
        width: wp("5.5%"),
        height: wp("5.5%"),
        alignSelf: "center"
    },
    close_ic: {
        width: 16, height: 16,
        marginTop: -16,
        marginRight: -16,
        alignSelf: "flex-end"
    },
    inner_row: {
        width: wp("70%"),
        alignSelf: "center",
        flexDirection: "row", justifyContent: "space-between"
    },
    title_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    main_row: {
        width: wp("90%"),
        alignSelf: 'center',
    }

});

export default styles;
