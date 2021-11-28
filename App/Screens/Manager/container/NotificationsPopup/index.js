import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../../Utility/index';
import Modal from "react-native-modal";
import colors from '../../../../Constants/Colors';
import { images } from '../../../../Constants/images';
import { actuatedNormalize, Fonts } from '../../../../utils';

const notificationPopup = ({ navigation, title, sub_title, isVisible, bottomTile, onpress }) => {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={() => { onpress() }}
        >
            <View style={styles.modal_view}>
                <View style={styles.inner_view}>
                    <TouchableOpacity onPress={() => { onpress() }}>
                        <Image source={images.close_regular} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.bold_title}>{title}</Text>
                    <Text style={styles.bold_regular}>{sub_title}</Text>
                    <Image source={images.banner} style={styles.img_banner} />
                    <View style={{ marginVertical: wp("2%") }} />
                    {/*  */}

                    {
                        bottomTile != '' ?
                            <>
                                <View style={{ alignSelf: "center" }}>
                                    <TouchableOpacity style={styles.paddder}>
                                        <Text style={styles.white_regular}>Post a New Opportunity</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginVertical: wp("2%") }} />
                            </>
                            :
                            <Text style={{ ...styles.bold_regular, paddingBottom: 16, width: wp('50%') }}>{bottomTile}</Text>
                    }
                </View>
            </View>
        </Modal >

    );
};

export default React.memo(notificationPopup);
const styles = StyleSheet.create({
    modal_view: {
        alignSelf: "center",
        width: wp('85%'),
        borderRadius: 16,
        padding: 6,
        backgroundColor: colors.white_Colors
    },
    img_banner: {
        height: hp('30%'),
        width: wp('80%'),
        alignSelf: "center",
        resizeMode: "contain"
    },
    inner_view: {
        marginTop: 5,
        alignSelf: "center",
    },
    bold_title: {
        marginTop: 5,
        fontSize: actuatedNormalize("28"),
        color: colors.violate,
        marginBottom: 16,
        fontFamily: Fonts.Bold,
        textAlign: "center"
    },
    bold_regular: {
        fontSize: actuatedNormalize("18"),
        color: colors.violate,
        marginBottom: 4,
        fontFamily: Fonts.Regular,
        textAlign: "center",
        width: wp('70%'),
        alignSelf: "center"
    },
    image: {
        height: wp("4%"),
        width: wp("4%"),
        resizeMode: 'contain',
        alignSelf: "flex-end",
        margin: 6,
    },
    paddder: {
        width: wp("30%"),
        padding: hp("1%"),
        borderRadius: 8,
        backgroundColor: colors.violate,
    },
    white_regular: {
        fontSize: actuatedNormalize("14"),
        color: colors.white_Colors,
        textAlign: "center",
        fontFamily: Fonts.Bold,
    },
})