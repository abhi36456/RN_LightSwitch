import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { fonts } from 'react-native-elements/dist/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { images } from '../../../Constants/images';
import { actuatedNormalize, colors, Fonts } from '../../../utils';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
export const Header = (props) => {
    return (
        <View style={styles.container}>
            <View />
            <View>
                <Text style={styles.text}>{props.title}</Text>
                <Text style={styles.subText}>{props.subTitle}</Text>
            </View>
            {/* <FontAwesome5 name={'plus'} size={26} color={colors.red} style={{ marginRight: 10 }} /> */}

            <TouchableOpacity onPress={() => props.onPress()} >
                <Image source={images.image_add} style={styles.img_animated} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    text: {
        fontSize: actuatedNormalize('22'),
        fontFamily: Fonts.Bold,
        textAlign: 'center'
    },
    subText: {
        fontSize: actuatedNormalize('18'),
        fontFamily: Fonts.Bold,
        textAlign: 'center'
    },
    image: {
        height: wp("18%"),
        width: wp("18%"),
        marginLeft: -8,
        resizeMode: 'contain'
    },
    img_animated: {
        width: wp("5.5%"),
        height: wp("5.5%"),
        marginRight: 8
    }
})
