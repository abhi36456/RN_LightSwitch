import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Image } from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import colors from '../Constants/Colors';
import { images } from '../Constants/images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../Utility/index';

const AuthHeader = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerSubContainer}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                    <Image
                        resizeMode={'contain'}
                        source={images.back_pink}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AuthHeader;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 20
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 15 : 20 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignSelf: 'center',
    },
    backWrapper: {
        justifyContent: 'center',
        borderRadius: 12,
        borderColor: colors.grey_Background,
        borderWidth: 1,
        marginLeft: 16,
        padding: 16,
    },
    backIcon: {
        width: 15,
        height: 15,
        tintColor: colors.dark_purple,
        alignSelf: 'center'
    },
});
