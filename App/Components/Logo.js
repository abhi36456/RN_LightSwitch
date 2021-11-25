import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
import Icon from 'react-native-vector-icons/FontAwesome';

const {strings, colors, fonts, urls, PATH} = constants;
const Logo = ({navigation, title, showPlus, route}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('90%'),
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../Assets/logo.png')}
          resizeMode={'contain'}
          style={{
            height: hp('15%'),
            width: wp('25%'),
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: hp('7%'),
            marginLeft: wp('3%'),
          }}></Image>
       
      </View>
      {showPlus == true ? (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
          <Icon
            name={'plus-circle'}
            size={25}
            color={constants.title_Colors}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Logo;
