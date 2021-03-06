import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
const { strings, colors, fonts, urls, PATH } = constants;
const Buttons = ({ navigation, title, click, buttonTop, btnColor }) => {
  return (
    <TouchableOpacity onPress={click}>
      <View style={{
        height: hp('7%'), width: wp('80%'), backgroundColor: btnColor ? btnColor : constants.title_Colors,
        marginTop: buttonTop,
        borderRadius: 15, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
      }}>
        <Text style={{ fontSize: wp(5), color: 'white', textAlign: 'center', }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default Buttons;
