import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from "react-native-elements";
import { images } from '../Constants/images';
import { actuatedNormalize } from '../utils';

const HeaderComponent = ({
  backgray = false,
  navigation,
  title,
  subTitle,
  rightFirstIcon, rightSecondIcon
}) => {
  return (
    <View>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image source={backgray ? images.back_grey : { uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg' }}
              style={{ marginLeft: 16, marginTop: hp('1%'), alignItems: "center", height: backgray ? 20 : 40, width: backgray ? 20 : 40, borderRadius: 40 }}></Image>
          </TouchableOpacity>
        }
        centerComponent={<View style={{ alignSelf: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
          <Text>{subTitle}</Text>
        </View>}
        rightComponent={
          <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: hp('1%') }}>
            <TouchableOpacity
              style={styles.ic_wrapper}
              onPress={() => navigation.navigate('FiltterScreen')}>
              <Image source={images.filter_ic}
                style={{
                  width: actuatedNormalize(15),
                  height: actuatedNormalize(15)
                }} />
            </TouchableOpacity>
            {
              rightSecondIcon &&
              <Icon name={rightSecondIcon} size={20} style={{ alignSelf: "center" }} color={constants.violate}></Icon>
            }
          </View>
        }
        containerStyle={{
          backgroundColor: 'white',
          alignItems: 'center',

        }}
      />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  ic_wrapper: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#EFEFEF",
    borderWidth: 1,
    padding: 8
  }
})
