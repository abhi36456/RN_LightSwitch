import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
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
import Toast from 'react-native-simple-toast';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { images } from '../../../Constants/images';

const SignUp = ({ navigation, title }) => {

  const [email, setEmail] = useState('')

  const onPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      Toast.show('Please enter the email');
    } else if (!reg.test(email)) {
      Toast.show('Please enter the valid email');
    } else {
      navigation.navigate('OtpVerfiy')
    }
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <View style={styles.headerSubContainer}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backWrapper}>
            <Image
              resizeMode={'contain'}
              source={images.back_pink}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
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
        click={() => onPress()}
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
    marginTop: hp('8%'),
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
    borderWidth: 1.5,
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
  },
  header: {
    backgroundColor: constants.white_Colors,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 20
      },
      {
        paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 15 : 20 // for android 
      }
    )
  },
  headerSubContainer: {
    flexDirection: 'row',
    width: wp("95%"),
    alignSelf: 'center',
  },
  backWrapper: {
    justifyContent: 'center',
    borderRadius: 12,
    borderColor: constants.grey_Background,
    borderWidth: 1,
    marginLeft: 16,
    padding: 16,
  },
  backIcon: {
    width: 15,
    height: 15,
    tintColor: constants.dark_purple,
    alignSelf: 'center'
  },

});