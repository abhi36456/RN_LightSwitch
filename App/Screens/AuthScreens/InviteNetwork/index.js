import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from '../../../Components/Buttons';
const InviteNetwork = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <Image
                source={require('../../../Assets/inviteNetwork.webp')} style={styles.swiperImg}
                resizeMode={'contain'}
            />
            <Text style={styles.titleTxt}>Invite Your Network </Text>
            <Text style={styles.subTitleTxt}>
                You can find friends from your contact lists
                to connected
            </Text>
            <Buttons title={'Connect with LinkedIn'} click={() => navigation.navigate('EnableNotification')} buttonTop={hp('20%')}></Buttons>
        </View>
    );
};

export default React.memo(InviteNetwork);

const styles = StyleSheet.create({
    swiperImg: { height: hp("35%"), width: wp("60%"), alignSelf: 'center', borderRadius: 20, marginTop: hp('10%') },
    titleTxt: { marginTop: hp('5%'), fontSize: 20, color: constants.black_Text, textAlign: 'center', fontWeight: '800' },
    subTitleTxt: { marginTop: hp('2%'), fontSize: 15, color: constants.grey_Text, textAlign: 'center', alignSelf: 'center', width: wp('90%') },
    mainView: { flex: 1, backgroundColor: constants.white_Colors }

})