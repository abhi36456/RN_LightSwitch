import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from '../../../Components/Buttons';
const EnableNotification = ({ navigation }) => {

    return (
        <View style={styles.mainView}>
            <Image
                source={require('../../../Assets/EnableNotification.webp')} style={styles.swiperImg}
                resizeMode={'contain'}
            />
            <Text style={styles.titleTxt}>Enable notification’s </Text>
            <Text style={styles.subTitleTxt}>
                Get push-notification when you get the match or receive a message.
            </Text>
            <Buttons title={'I want to be notified'} buttonTop={hp('20%')} click={() => navigation.navigate('BottomTab')}></Buttons>
        </View>
    );
};

export default React.memo(EnableNotification);

const styles = StyleSheet.create({
    swiperImg: { height: hp("35%"), width: wp("60%"), alignSelf: 'center', borderRadius: 20, marginTop: hp('10%') },
    titleTxt: { marginTop: hp('5%'), fontSize: 20, color: constants.black_Text, textAlign: 'center', fontWeight: '800' },
    subTitleTxt: { marginTop: hp('2%'), fontSize: 15, color: constants.grey_Text, textAlign: 'center', alignSelf: 'center', width: wp('90%') },
    mainView: { flex: 1, backgroundColor: constants.white_Colors }
})