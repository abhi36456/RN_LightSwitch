
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import constants from '../../../Constants/Colors';
import Path from "../../../Constants/Path"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import Entypo from "react-native-vector-icons/FontAwesome"
import styles from './style';
import colors from '../../../Constants/Colors';
import { images } from '../../../Constants/images';
const Login = ({ navigation, title }) => {

  return (
    <View style={{
      backgroundColor: colors.white_Colors,
      flex: 1
    }}>
      <View style={{ marginTop: hp("6%") }} />
      <Image
        source={images.email_screen_logo} style={styles.logoImg}
        resizeMode={'contain'}
      />
      <View style={{ marginTop: hp("2%") }} />
      <Text style={styles.signUpTxt}>Sign up to continue</Text>
      <Buttons buttonTop={hp('4%')}
        btnColor={colors.dark_purple}
        click={() => navigation.navigate('SignUp')} title={'Continue with email'}></Buttons>
    </View>
  );
};

export default React.memo(Login);
