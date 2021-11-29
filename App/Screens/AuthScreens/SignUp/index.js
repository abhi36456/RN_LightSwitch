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
import colors from '../../../Constants/Colors';
import { actuatedNormalize, Fonts } from '../../../utils';
import { TextInput } from 'react-native';

const SignUp = ({ navigation, title }) => {

  const [email, setEmail] = useState('')

  return (
    <View style={styles.mainView}>
      <Text style={styles.titleTxt}>My email</Text>
      <Text style={styles.subTitleTxt}>
        Please enter your valid email. We will send you a 4-digit code to verify your account.
      </Text>
      <View style={styles.viewWrapper}>
        <TextInput
          keyboardType={'email-address'}
          value={email}
          returnKeyType={'done'}
          placeholder={"Enter email address"}
          style={styles.inputText}
          onChangeText={(val) => setEmail(val)}
        />
      </View>
      <Buttons
        btnColor={colors.dark_purple}
        buttonTop={hp('8%')}
        click={() => navigation.navigate('OtpVerfiy')}
        title={'Continue'}>
      </Buttons>
    </View>
  );
};

export default React.memo(SignUp);
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white_Colors
  },
  titleTxt: {
    fontSize: actuatedNormalize(34),
    fontFamily: Fonts.Bold,
    color: 'black',
    marginTop: hp('15%'),
    width: wp('80%'),
    alignSelf: 'center',
  },

  subTitleTxt: {
    fontSize: actuatedNormalize(15),
    color: colors.light_black,
    marginTop: hp('1%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  inputText: {
    padding: 16,
    borderColor: colors.grey_Background,
    borderRadius: 12,
    borderWidth: 1,
    fontFamily: Fonts.Regular
  },
  inputImg: {
    height: hp("15%"),
    width: wp("80%"),
    alignSelf: 'center',
    marginTop: hp('5%')
  },
  viewWrapper: {
    alignSelf: "center",
    width: wp('80%'),
    marginTop: hp('5%')
  }

});