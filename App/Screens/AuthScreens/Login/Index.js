
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import styles from './style';
import colors from '../../../Constants/Colors';
import { images } from '../../../Constants/images';
import { Spacer } from '../../../utils/spacer';

const Login = ({ navigation, title }) => {

  return (
    <View style={styles.container}>
      <Spacer space={hp(4)} />
      <Image
        source={images.email_screen_logo} style={styles.logoImg}
        resizeMode={'contain'}
      />
      <Spacer space={hp(1)} />
      <Text style={styles.signUpTxt}>Sign up to continue</Text>
      <>
        <Spacer space={hp(2)} />
        <Buttons
          btnColor={colors.dark_purple}
          click={() => navigation.navigate('SignUp')}
          title={'Continue with email'}>
        </Buttons>
      </>
    </View>
  );
};

export default React.memo(Login);
