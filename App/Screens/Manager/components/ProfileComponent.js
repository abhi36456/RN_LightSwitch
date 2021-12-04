import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { actuatedNormalize, colors, Fonts, Icons } from '../../../utils';
import { images } from '../../../Constants/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
export const ProfileComponent = ({ }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.slider_view}>
                <Image
                    borderRadius={100}
                    source={images.user_round}
                    style={styles.profile_ic}
                />
                <Text style={styles.bold_title}>Anna Herper</Text>
                <Text style={styles.bold_regular}>Software Engineer @ Uber </Text>
                <Text style={styles.blue_regular}>www.linkedin.com/in/aharper</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <Text style={styles.bold_title}>Skills</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={styles.flex_row}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>React</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>AWS</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Python</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Javascript</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Kubernetes</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Cloud</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <Text style={styles.bold_title}>Looking For</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Software Engineer</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Full-Stack Engineer</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("5%") }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
        padding: wp("6%")
    },
    profile_ic: {
        width: wp("24%"),
        height: wp("24%"),
        alignSelf: "center",
        marginBottom: wp('5%')
    }
})