import React, { useEffect, useRef, useState } from 'react';
import {Text, View, Dimensions, TouchableWithoutFeedBack,StyleSheet,Image, TouchableOpacity} from 'react-native';
import constants from '../../../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Utility/index';
import * as StaticArray from "../../../Constants/StaticArray"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Buttons from '../../../Components/Buttons';
const {strings, colors, fonts, urls, PATH} = constants;
const SwiperScreen = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const ProductsImageRef = useRef("")
  const _renderItem = ({ item, index }) => {
    return (
      <Image
        source={item.img} style={styles.swiperImg}
        resizeMode={'stretch'}
      />
    );
  }

  return (
    <View>

      <Carousel
        layout={'default'}
        containerCustomStyle={styles.swiperContiner}
        useScrollView
        ref={ProductsImageRef}
        data={StaticArray.bannerList}
        renderItem={_renderItem}
        sliderWidth={wp("100%")}
        itemWidth={wp("70%")}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Text style={styles.titleTxt}>{activeSlide == 0 ? 'Discover' : null} {activeSlide == 1 ? 'Hire' : null}{activeSlide == 2 ? 'Connect' : null} </Text>
      <Text style={styles.subTitleTxt}>
        {activeSlide == 0 ? ' Discover professionals in our network with unique skill sets that best match your needs.' : null}
        {activeSlide == 1 ? ' We match you with people that best fit your openings and have expressed interest in the role. ' : null}
        {activeSlide == 2 ? 'Not looking for a job? That’s fine, Network with  who have similar interests or broaden your circle. ' : null}
      </Text>
      <Pagination
        dotsLength={StaticArray.bannerList.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotView}
        inactiveDotStyle={{
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <Buttons title={'Create an account'} click={() => navigation.navigate('Login')}></Buttons>

      <TouchableOpacity style={styles.alreadyAccountView}
      onPress={()=>navigation.navigate('ManagerTabs')}>
        <Text style={styles.alreadyTxt}>Already have an account? </Text>
        <Text style={styles.signInTxt}>SignIn</Text>

      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SwiperScreen);

const styles = StyleSheet.create({



  swiperImg: { height: hp("35%"), width: wp("60%"), alignSelf: 'center', borderRadius: 20 },
  swiperContiner: { alignSelf: "center", marginTop: hp('10%') },
  titleTxt: { marginTop: hp('5%'), fontSize: 20, color: constants.title_Colors, textAlign: 'center', fontWeight: '800' },
  subTitleTxt: { marginTop: hp('5%'), fontSize: 15, color: constants.grey_Text, textAlign: 'center', alignSelf: 'center', width: wp('90%') },
  dotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: constants.title_Colors
  },

  alreadyAccountView: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: hp('5%') },
  alreadyTxt: { fontSize: 17, color: constants.grey_Text, textAlign: 'center', },
  signInTxt: { fontSize: 17, color: constants.title_Colors, textAlign: 'center', }

})