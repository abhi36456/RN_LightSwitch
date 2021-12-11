import React, { useState, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import constants from '../../../Constants/Colors';
import { constant_string } from '../../../data';
import styles from './style';

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

      <AuthHeader navigation={navigation} />
      <Text style={styles.titleTxt}>01:42</Text>
      <Text style={styles.subTitleTxt}>{constant_string.Otp_Info_Text}</Text>

      <View style={styles.textInputMainView}>
        <View style={[styles.input_border, { backgroundColor: otp1 == '' ? null : constants.dark_purple }]}>
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

        <View style={[styles.input_border, { backgroundColor: otp2 == '' ? null : constants.dark_purple }]}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_2}
            keyboardType={'number-pad'}
            onChangeText={otp2 => {
              setotp2(otp2)
              if (otp2) input_3.current.focus();
            }}
          ></TextInput>
        </View>

        <View style={[styles.input_border, { backgroundColor: otp3 == '' ? null : constants.dark_purple }]}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_3}
            keyboardType={'number-pad'}
            onChangeText={otp3 => {
              setotp3(otp3)
              if (otp3) input_4.current.focus();
            }}
          />
        </View>


        <View style={[styles.input_border, { backgroundColor: otp4 == '' ? null : constants.dark_purple }]}>
          <TextInput
            style={styles.textInputView}
            maxLength={1}
            ref={input_4}
            keyboardType={'number-pad'}
            onChangeText={otp4 => {
              setotp4(otp4)
              if (otp4) input_4.current.focus();
              navigation.navigate('ChangePassword')
            }}
          />
        </View>
      </View>
      <Text style={styles.titleTxt2}>Send again</Text>
    </View>
  );
};

export default React.memo(OtpVerfiy);




















