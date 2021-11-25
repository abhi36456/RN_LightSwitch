import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import constants from '../../../Constants/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"

const SignUp = ({ navigation, title }) => {


  return (
    <View style={styles.mainView}>
      <Text style={styles.titleTxt}>My mobile</Text>
      <Text style={styles.subTitleTxt}>
        Please enter your valid phone number. We will send you a 4-digit code to verify your account.
      </Text>
      <Image
        source={require('../../../Assets/input.webp')} style={styles.inputImg}
        // resizeMode={FastImage.resizeMode.contain}
        resizeMode={'contain'}
      />
      <Buttons buttonTop={hp('4%')} click={() => navigation.navigate('OtpVerfiy')} title={'Continue'}></Buttons>
    </View>
  );
};

export default React.memo(SignUp);
const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: 'white' },
  titleTxt: { fontSize: 27, color: 'black', marginTop: hp('13%'), width: wp('80%'), alignSelf: 'center', fontWeight: '600' },

  subTitleTxt: { fontSize: 15, color: 'black', marginTop: hp('1%'), width: wp('80%'), alignSelf: 'center', },
  inputImg: { height: hp("15%"), width: wp("80%"), alignSelf: 'center', marginTop: hp('5%') },

});