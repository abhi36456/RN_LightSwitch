import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { actuatedNormalize, colors, Fonts, Icons } from '../../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { windowHeight, windowWidth } from '../../../Constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { images } from '../../../Constants/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import { TouchableOpacity } from 'react-native';
export const JobsListComponent = ({ item, onPress, fromDetail, navigation, color }) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{ ...styles.container, borderWidth: fromDetail ? 0 : 1, paddingHorizontal: fromDetail ? 0 : 15 }}>
                    <Text style={{ ...styles.headingText, color: color ? color : colors.black }}>{item.title}</Text>
                    <View style={{ ...styles.row, marginTop: 10 }}>
                        <Image source={item.icon} style={styles.image} />
                        <View>
                            <Text style={styles.text}>{item.companyName}</Text>
                            <View style={styles.locationView}>
                                <Image
                                    resizeMode={"contain"}
                                    style={{ ...styles.img_ic, width: wp("3%"), height: wp("4%") }}
                                    source={images.pin_map} />
                                <Text style={styles.subText}>{item.location}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.row, marginVertical: 10 }}>
                        <FontAwesome5 name={'briefcase'} size={22} color={colors.darkText} />
                        <Text style={{ ...styles.subText }}>{item.jobType}</Text>
                    </View>
                    <View style={styles.row}>
                        <FontAwesome name={'building-o'} size={22} color={colors.darkText} style={{ marginRight: 5 }} />
                        <Text style={{ ...styles.text }}>{item.stage}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.bottomView, styles.row, { display: fromDetail ? 'none' : 'flex' }]}>
                <View style={styles.buttonView}>
                    <Image
                        resizeMode={"contain"}
                        style={styles.img_ic}
                        source={images.close_bold} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ManagerJobs")}
                    style={styles.buttonView}>
                    <Image
                        resizeMode={"contain"}
                        style={{ ...styles.img_ic, width: wp("5.2%"), height: wp("5.2%") }}
                        source={images.edit} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("DiscoverdPeople")}
                    style={styles.buttonView}>
                    <Image
                        resizeMode={"contain"}
                        style={{ ...styles.img_ic, width: wp("5.2%"), height: wp("5.2%") }}
                        source={images.people_active} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: colors.white,
        marginTop: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headingText: {
        fontSize: actuatedNormalize('24'),
        fontFamily: Fonts.Bold,
    },
    subText: {
        fontSize: actuatedNormalize('14'),
        fontFamily: Fonts.Medium,
        marginLeft: 10
    },
    text: {
        fontSize: actuatedNormalize('18'),
        fontFamily: Fonts.Regular,
        marginLeft: 10
    },
    image: {
        height: wp("18%"),
        width: wp("18%"),
        marginLeft: -8,
        resizeMode: 'contain'
    },
    locationView: {
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: colors.red,
        marginLeft: 10,
        marginTop: 5,
        paddingHorizontal: 16,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
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
    bottomView: {
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: windowWidth * 0.5,
    },
    img_ic: {
        height: wp("3.2%"),
        width: wp("3.2%"),
        alignSelf: "center"
    }
})