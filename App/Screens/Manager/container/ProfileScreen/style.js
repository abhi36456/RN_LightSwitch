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
        flexDirection: "row",
        justifyContent: "space-between",
        padding: actuatedNormalize(16),
        borderRadius: actuatedNormalize(16),
        borderWidth: 1,
        borderColor: colors.grey_Background
    },
    input_row: {
        width: wp(85),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 16,
        padding: actuatedNormalize(6),
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
    rbSheetViewContainer: {
        width: wp(60),
        alignSelf: 'center',
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: actuatedNormalize(20),
    },
    rbSheetImage: {
        width: actuatedNormalize(55),
        height: actuatedNormalize(55),
        alignSelf: 'center'
    },
    rbSheetText: {
        fontFamily: Fonts.Bold,
        margin: actuatedNormalize(8),
        fontSize: actuatedNormalize(14)
    },
    input_wrapper: {
        width: wp(85),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: actuatedNormalize(12),
        borderRadius: actuatedNormalize(16),
        borderWidth: 1,
        borderColor: colors.grey_Background
    },
    txt_lbl_common: {
        color: colors.black_gray,
        fontSize: actuatedNormalize(16),
        fontFamily: fonts.Bold,
        padding: actuatedNormalize(6),
        paddingLeft: 0
    },
    next_ic: {
        alignSelf: "center",
        width: wp("3%"),
        height: wp("3%")
    },
});

export default styles;
