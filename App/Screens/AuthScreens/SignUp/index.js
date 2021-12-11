import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import colors from '../../../Constants/Colors';
import { TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import styles from './style';
import { constant_string, input_placeholder_text } from '../../../data';
import AuthHeader from '../../../Components/AuthHeader';


const SignUp = ({ navigation, title }) => {

  const [email, setEmail] = useState('')

  const onPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      Toast.show(constant_string.Please_enter_mail);
    } else if (!reg.test(email)) {
      Toast.show(constant_string.Please_enter_valid_mail);
    } else {
      navigation.navigate('OtpVerfiy')
    }
  }

  return (
    <View style={styles.mainView}>
      <AuthHeader navigation={navigation} />
      <Text style={styles.titleTxt}>My email</Text>
      <Text style={styles.subTitleTxt}>
        {constant_string.Email_Info}
      </Text>
      <View style={styles.viewWrapper}>
        <TextInput
          keyboardType={'email-address'}
          value={email}
          returnKeyType={'done'}
          placeholder={input_placeholder_text.enter_email}
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
