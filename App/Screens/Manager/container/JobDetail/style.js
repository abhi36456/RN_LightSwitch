import { StyleSheet, Platform } from 'react-native';
import colors from '../../../../Constants/Colors';
import { actuatedNormalize, Fonts } from '../../../../utils';
import fonts from '../../../../utils/fonts';
import { windowWidth, windowHeight } from '../../../../Constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';

const styles = StyleSheet.create({
    scroll_container: {
        borderColor: "#7165FF",
        borderWidth: 2,
        width: wp(85),
        borderRadius: 15,
        alignSelf: "center"
    },
    container: {
        flex: 1,
        backgroundColor: colors.white_Colors,
        justifyContent: "center"
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
});

export default styles;
