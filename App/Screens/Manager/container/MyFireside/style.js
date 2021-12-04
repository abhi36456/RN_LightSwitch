import { Dimensions, StyleSheet, Platform } from 'react-native';
import colors from '../../../../Constants/Colors';
const window = Dimensions.get('window');
import constants from '../../../../Constants/Colors';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import fonts from '../../../../utils/fonts';
const styles = StyleSheet.create({
    profile_ic: {
        width: wp("24%"),
        height: wp("24%"),
        alignSelf: "center",
        marginBottom: wp('5%'),
    },
    header: {
        backgroundColor: constants.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 15
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 10 : 16 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignSelf: 'center',
    },
    backWrapper: {
        justifyContent: 'center'
    },
    backIcon: {
        width: 34,
        height: 34,
        alignSelf: 'center'
    },
    rightIcon: {
        width: 26,
        height: 26,
        alignSelf: 'center'
    },
    headerText: {
        color: constants.black_Text,
        fontFamily: Fonts.Bold,
        fontSize: actuatedNormalize(25),
        alignSelf: 'center',
        textAlign: 'center'
    },
    subheaderText: {
        marginRight: 16,
        color: constants.violate,
        fontFamily: Fonts.Regular,
        fontSize: actuatedNormalize(20),
        alignSelf: 'center',
        textAlign: 'center'
    },
    divider: {
        height: 1,
        width: '100%',
    },
    topMargin: {
        marginTop: 10
    },
    camera_ic: {
        width: wp("10%"),
        height: wp("10%"),
        alignSelf: "center",
        position: "absolute",
        bottom: 5,
        right: 5
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
    input_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 16,
        marginRight: 16
    },
    img_add: {
        width: wp("4.5%"),
        height: wp("4.5%"),
        alignSelf: "center"
    },
    inner_row: {
        width: wp("70%"),
        alignSelf: "center",
        flexDirection: "row", justifyContent: "space-between"
    },
    paddder: {
        width: wp("30%"),
        padding: hp("1.5%"),
        borderRadius: 8,
        backgroundColor: colors.violate,
    },
    close_ic: {
        width: 16, height: 16,
        marginTop: -16,
        marginRight: -16,
        alignSelf: "flex-end"
    },
    black_regular: {
        fontSize: actuatedNormalize("12"),
        color: colors.white_Colors,
        fontFamily: Fonts.Regular,
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
    mainView: {
        height: hp('64%'),
        marginTop: 16,
    },
    iconMainView: {
        flexDirection: 'row',
        width: wp('30%'),
        alignSelf: 'center',
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    swiperImage: {
        height: hp('50%'),
        width: wp('80%'),
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
    black_regular: {
        fontSize: actuatedNormalize("12"),
        color: colors.white,
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
    buttonView: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: '#00000029',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: { height: 4, width: 0 },
    },
    img_ic: {
        height: wp("3.2%"),
        width: wp("3.2%"),
        alignSelf: "center"
    },
    img_star: {
        height: wp("4%"),
        width: wp("4%"),
        alignSelf: "center"
    },
    slider_view: {
        borderColor: "#7165FF",
        borderWidth: 2,
        width: wp("80%"),
        borderRadius: 15,
        // padding: wp("6%")
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
    subHeadingText: {
        fontSize: actuatedNormalize('18'),
        fontFamily: fonts.Bold,
        color: colors.black,
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
});

export default styles;
