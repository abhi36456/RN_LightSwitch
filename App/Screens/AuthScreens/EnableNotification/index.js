import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import Buttons from '../../../Components/Buttons';
import { images } from '../../../Constants/images';
import AuthHeader from '../../../Components/AuthHeader';
import { constant_string } from '../../../data';
import styles from './style';

const EnableNotification = ({ navigation }) => {

    return (
        <View style={styles.mainView}>
            <AuthHeader navigation={navigation} />
            <Image source={images.chat} style={styles.swiperImg} resizeMode={'contain'} />
            <Text style={styles.titleTxt}>Enable notification’s </Text>
            <Text style={styles.subTitleTxt}>{constant_string.Notification_Info}</Text>
            <Buttons title={'I want to be notified'} btnColor={constants.dark_purple} buttonTop={hp('20%')} click={() => navigation.navigate('ManagerTabs')}></Buttons>
        </View>
    );
};

export default React.memo(EnableNotification);

