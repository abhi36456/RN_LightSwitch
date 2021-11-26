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
import { windowWidth, windowHeight } from '../../../../Constants';
const styles = StyleSheet.create({
    profile_ic: {
        width: wp("24%"),
        height: wp("24%"),
        alignSelf: "center",
        marginBottom: wp('5%')
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
        right: 2
    },
    txt_lbl: {
        color: colors.violate,
        fontSize: actuatedNormalize(16),
        fontFamily: fonts.Bold,
        marginLeft: 16,
        padding: actuatedNormalize(6),
        paddingLeft: 0
    },
    txt_lbl_common: {
        color: colors.black_gray,
        fontSize: actuatedNormalize(16),
        fontFamily: fonts.Bold,
        padding: actuatedNormalize(6),
        paddingLeft: 0
    },
    borderview: {
        backgroundColor: colors.black_border,
        height: 1,
        marginVertical: 8
    },
    input_wrapper: {
        width: wp("90%"),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: actuatedNormalize(6),
        paddingLeft: 0
    },
    next_ic: {
        alignSelf: "center",
        width: wp("3%"),
        height: wp("3%")
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
    slider_view: {
        borderColor: "#7165FF",
        borderWidth: 2,
        width: wp("80%"),
        borderRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tags: {
        marginVertical: 10,
        justifyContent: 'space-between',
        width: windowWidth * 0.8,
        alignSelf: 'center'
    },
    image: {
        height: windowHeight * 0.3,
        width: windowWidth,
        resizeMode: 'contain',
        alignSelf: 'center'
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
    blue_regular: {
        fontSize: actuatedNormalize("16"),
        color: "#0094FF",
        fontFamily: Fonts.Italic,
    },
    button_wrapper: {
        padding: 5,
        backgroundColor: colors.violate,
        width: wp("24%"),
        alignSelf: "flex-end",
        marginRight: 16,
        borderRadius: 16
    },
    txt_save:{
        fontFamily: Fonts.Bold,
        color: colors.white_Colors,
        textAlign: 'center',
        fontSize: actuatedNormalize(14)
    }
});

export default styles;
