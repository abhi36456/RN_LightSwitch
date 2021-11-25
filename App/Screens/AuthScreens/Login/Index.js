
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
const Login = ({ navigation, title }) => {

  return (
    <View style={{}}>
      <Image
        source={Path.logo} style={styles.logoImg}
        resizeMode={'contain'}
      />
      <Text style={styles.signUpTxt}>Sign up to continue</Text>
      <Buttons buttonTop={hp('4%')} click={() => navigation.navigate('SignUp')} title={'Continue with email'}></Buttons>
      <Text style={styles.phoneTxt}>Use phone number</Text>
      <View style={styles.signupWithView}>
        <View style={styles.borderLine}></View>
        <Text style={styles.signupWithTxt}>or sign up with</Text>
        <View style={styles.borderLineRight}></View>
      </View>
      <View style={styles.socialView}>
        <Entypo name={'facebook-official'} size={30} color={constants.title_Colors}></Entypo>
        <Entypo name={'google'} size={30} color={constants.title_Colors}></Entypo>
        <Entypo name={'apple'} size={30} color={constants.title_Colors}></Entypo>
      </View>
      <View style={styles.termPolicyView}>
        <Text style={styles.termPolicyTxt}>Terms of use</Text>
        <Text style={styles.termPolicyTxt}>Privacy Policy</Text>
      </View>
    </View>
  );
};

export default React.memo(Login);
