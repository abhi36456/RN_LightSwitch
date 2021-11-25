import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import { FloatingLabelInput } from 'react-native-floating-label-input';
const {strings, colors, fonts, urls, PATH} = constants;
const InputField = ({
  navigation,
  placeHolder,
  leftTitle,
  rightTitle,
  securtyTxt,
  numPad,
  inputonChangeText,
  rightIconPress,
  autoCapitalization,
  value,
  editable
}) => {
  return (
    <Input
      placeholder={placeHolder}
      secureTextEntry={securtyTxt}
      keyboardType={numPad}
      onChangeText={inputonChangeText}
      autoCapitalize={autoCapitalization}
      value={value}
      editable={editable}
      leftIcon={
        <Icon
          name={leftTitle}
          size={17}
          color={constants.grey_Text}
          style={{alignSelf: 'baseline', marginRight: 5}}
        />
      }
      inputContainerStyle={{
        borderColor: constants.white_Colors,
        borderWidth: 0,

        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      }}
      containerStyle={{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: hp('8%'),
        // backgroundColor: constants.grey_Background,
        borderColor:constants.title_Colors,
        borderWidth:1,
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: hp('5%'),
      }}
      rightIcon={
        <TouchableOpacity onPress={rightIconPress}>
          <Icon
            name={rightTitle}
            size={17}
            color={constants.grey_Text}
            style={{alignSelf: 'baseline'}}
          />
        </TouchableOpacity>
      }
    />


  );
};

export default InputField;
