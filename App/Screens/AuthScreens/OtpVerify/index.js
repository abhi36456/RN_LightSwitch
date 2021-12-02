import React, { useState, useRef } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../../../Components/commonHeader';
import constants from '../../../Constants/Colors';
import { images } from '../../../Constants/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';

import styles from './style';

const { strings, colors, fonts, urls, PATH } = constants;
const OtpVerfiy = ({ navigation, title }) => {
  const [otp1, setotp1] = useState("")
  const [otp2, setotp2] = useState("")
  const [otp3, setotp3] = useState("")
  const [otp4, setotp4] = useState("")
  const input_1 = useRef("");
  const input_2 = useRef("");
  const input_3 = useRef("");
  const input_4 = useRef("");
  return (
    <View style={{ flex: 1, backgroundColor: constants.white_Colors }}>

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
      <Text style={styles.titleTxt}>01:42</Text>
      <Text style={styles.subTitleTxt}>
        Type the verification code
        we’ve sent you
      </Text>

      <View style={styles.textInputMainView}>
        <View style={{
          borderColor: constants.dark_purple,
          borderWidth: 1,
          height: hp('8.5%'), width: wp('17%'), backgroundColor: otp1 == '' ? null : constants.dark_purple, borderRadius: 12, marginLeft: wp('3%'), justifyContent: 'center', alignItems: 'center'
        }}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_1}
            keyboardType={'number-pad'}
            onChangeText={otp1 => {
              setotp1(otp1)
              if (otp1) input_2.current.focus();
            }}
          ></TextInput>
        </View>

        <View style={{
          height: hp('8.5%'),
          borderColor: constants.dark_purple,
          borderWidth: 1,
          width: wp('17%'), backgroundColor: otp2 == '' ? null : constants.dark_purple, borderRadius: 12, marginLeft: wp('3%'), justifyContent: 'center', alignItems: 'center'
        }}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_2}
            keyboardType={'number-pad'}
            onChangeText={otp2 => {
              // this.setState({ otp2 })
              setotp2(otp2)
              if (otp2) input_3.current.focus();
            }}
          ></TextInput>
        </View>

        <View style={{
          borderColor: constants.dark_purple,
          borderWidth: 1,
          height: hp('8.5%'), width: wp('17%'), backgroundColor: otp3 == '' ? null : constants.dark_purple, borderRadius: 12, marginLeft: wp('3%'), justifyContent: 'center', alignItems: 'center'
        }}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_3}
            keyboardType={'number-pad'}
            onChangeText={otp3 => {
              // this.setState({ otp3 })
              setotp3(otp3)
              if (otp3) input_4.current.focus();
            }}
          ></TextInput>
        </View>


        <View style={{
          borderColor: constants.dark_purple,
          borderWidth: 1,
          height: hp('8.5%'), width: wp('17%'), backgroundColor: otp4 == '' ? null : constants.dark_purple, borderRadius: 12, marginLeft: wp('3%'), justifyContent: 'center', alignItems: 'center'
        }}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_4}
            keyboardType={'number-pad'}
            onChangeText={otp4 => {
              // this.setState({ otp4 })
              setotp4(otp4)
              if (otp4) input_4.current.focus();
              navigation.navigate('ChangePassword')
              
            }}
          ></TextInput>
        </View>
        

      </View>
      <Text style={styles.titleTxt2}>Send again</Text>

    </View>
  );
};

export default React.memo(OtpVerfiy);




















