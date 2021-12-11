import { StyleSheet } from 'react-native';
import colors from '../../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import fonts from '../../../../utils/fonts';

const styles = StyleSheet.create({
    scroll_container: {
        flex: 1,
        alignSelf: "center"
    },
    profile_ic: {
        width: wp("24%"),
        height: wp("24%"),
        alignSelf: "center",
        marginBottom: wp('5%'),
    },
    txt_lbl: {
        width: wp(85),
        color: colors.violate,
        fontSize: actuatedNormalize(16),
        fontFamily: fonts.Bold,
        padding: actuatedNormalize(6),
        alignSelf: "center",
    },
    borderview: {
        backgroundColor: colors.black_border,
        height: 0,
        marginVertical: 4
    },
    txtInput: {
        width: wp(85),
        alignSelf: "center",
        padding: actuatedNormalize(16),
        borderRadius: actuatedNormalize(16),
        borderWidth: 1,
        borderColor: colors.grey_Background
    },
    button_wrapper: {
        padding: 8,
        backgroundColor: colors.violate,
        width: wp(22),
        alignSelf: "flex-end",
        marginRight: 16,
        borderRadius: 16
    },
    txt_save: {
        fontFamily: Fonts.Bold,
        color: colors.white_Colors,
        textAlign: 'center',
        fontSize: actuatedNormalize(14)
    },
    tab_container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: wp("70%"),
        alignSelf: "center"
    },
    bold_title: {
        fontSize: actuatedNormalize("22"),
        color: colors.violate,
        marginBottom: 2,
        fontFamily: Fonts.Bold,
    },
    bold_regular: {
        fontSize: actuatedNormalize("18"),
        color: colors.black,
        marginBottom: 4,
        fontFamily: Fonts.Bold,
    },
    blue_regular: {
        fontSize: actuatedNormalize("16"),
        color: "#0094FF",
        fontFamily: Fonts.Italic,
    },
    slider_view: {
        borderColor: "#7165FF",
        borderWidth: 2,
        width: wp("80%"),
        borderRadius: 15,
    },
    profile_ic: {
        width: wp("24%"),
        height: wp("24%"),
        alignSelf: "center",
        marginBottom: wp('5%')
    },
    headingText: {
        fontSize: actuatedNormalize('20'),
        fontFamily: fonts.Bold,
        color: colors.violate,
        marginVertical: '5%'
    },
    text: {
        fontSize: actuatedNormalize('16'),
        fontFamily: fonts.Regular
    },
    subText: {
        fontSize: actuatedNormalize('14'),
        fontFamily: Fonts.Regular,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    tab_fonts: {
        fontFamily: Fonts.Bold,
        fontSize: actuatedNormalize(24)
    }
});

export default styles;
