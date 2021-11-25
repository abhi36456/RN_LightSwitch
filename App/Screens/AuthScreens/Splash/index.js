import React, {useEffect} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import constants from '../../../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
const {strings, colors, fonts, urls, PATH} = constants;
import * as Utility from "../../../Utility/index"
const Splash = ({navigation}) => {
  useEffect(() => {
    timeoutHandle = setTimeout(() => {
      retrieveData();
    }, 2000);
  }, []);
  const retrieveData = async() => {
 navigation.navigate('SwiperScreen')

  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants.title_Colors,
      }}>
      <View
        style={{
          // height: hp('15%'),
          // width: wp('50%'),
          // backgroundColor: constants.white_Colors,
          // borderRadius: 30 / PixelRatio.get(),
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: Dimensions.get('window').width * 0.5,
          height: Dimensions.get('window').width * 0.5,
          backgroundColor: constants.white_Colors,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <Text style={{color:constants.white_Colors,fontSize:30,fontWeight:"bold"}}>Logo</Text>

        {/* <Image
          source={require('../../../Assets/splashLogo.png')}
          resizeMode={'contain'}
          style={{height: hp('20%')}}></Image> */}
      </View>
    </View>
  );
};

export default React.memo(Splash);
