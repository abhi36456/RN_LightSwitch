import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
const {strings, colors, fonts, urls, PATH} = constants;
const TitleInputField = ({
  navigation,
  placeHolder,
  leftTitle,
  rightTitle,
  securtyTxt,
  numPad,
  rightIconPress,
  Title,
  valueTitle,
  changeTxt,
  editable,
}) => {
  return (
    <View>
      <Text
        style={{
          color: constants.textHeading_Color,
          fontSize: 17,
          fontWeight: '600',
          width: wp('80%'),
          alignSelf: 'center',
          marginTop: hp('3%'),
        }}>
        {Title}
      </Text>
      <Input
        placeholder={placeHolder}
        secureTextEntry={securtyTxt}
        keyboardType={numPad}
        value={valueTitle}
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
          borderColor: constants.grey_Background,
          borderWidth: 0,

          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          ...Platform.select({
            ios: {
              top: 10,
            },
            android: {
              top: 13,
            },
          }),
        }}
        containerStyle={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',

          // backgroundColor: constants.grey_Backgroun
          borderColor: constants.light_Grey,
          borderWidth: 1,
          width: wp('80%'),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 8,
          marginTop: hp('2%'),

          ...Platform.select({
            ios: {
              height: hp('5.5%'),
            },
            android: {
              height: hp('6.5%'),
            },
          }),
        }}
        rightIcon={
          <TouchableOpacity onPress={rightIconPress}>
            <Icon
              name={rightTitle}
              size={17}
              color={constants.title_Colors}
              style={{alignSelf: 'baseline'}}
            />
          </TouchableOpacity>
        }
        onChangeText={changeTxt}
      />
    </View>
  );
};

export default TitleInputField;
