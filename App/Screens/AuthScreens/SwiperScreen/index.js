import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import * as StaticArray from "../../../Constants/StaticArray"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Buttons from '../../../Components/Buttons';
import { actuatedNormalize, Fonts } from '../../../utils';
import colors from '../../../Constants/Colors';

const SwiperScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [user_type, setUserType] = useState(1)
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
    <View style={{
      backgroundColor: colors.white_Colors,
      flex: 1
    }}>
      <View>
        <Carousel
          layout={'default'}
          containerCustomStyle={styles.swiperContiner}
          useScrollView
          ref={ProductsImageRef}
          data={user_type == 1 ? StaticArray.professional_bannerList : StaticArray.manager_bannerList}
          renderItem={_renderItem}
          sliderWidth={wp("100%")}
          itemWidth={wp("65%")}
          inactiveSlideScale={0.85}
          loop
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {user_type == 1 ?
          <Text style={styles.titleTxt}>{activeSlide == 0 ? 'Discover diversity' : null} {activeSlide == 1 ? 'Fill positions fast' : null}{activeSlide == 2 ? 'Take action' : null} </Text>
          :
          <Text style={styles.titleTxt}>{activeSlide == 0 ? 'Meet hiring managers' : null} {activeSlide == 1 ? 'Custom recommendations' : null}{activeSlide == 2 ? 'Grow and earn' : null} </Text>
        }
        {user_type == 1 ?
          <Text style={styles.subTitleTxt}>
            {activeSlide == 0 ? 'Discover a diverse, passionate community of professionals interested in discussing your opportunities' : null}
            {activeSlide == 1 ? 'No more recruiting ping pong. Connect directly with rising talent who have already expressed interest in your positions.' : null}
            {activeSlide == 2 ? 'Hire 5x faster with an exclusive platform designed to connect you to high-quality candidates in minutes. No more waiting.' : null}
          </Text>
          :
          <Text style={styles.subTitleTxt}>
            {activeSlide == 0 ? 'Connect directly with leading professionals hiring for leading opportunities. Executives want to chat with you, so no more waiting to hear back.' : null}
            {activeSlide == 1 ? 'Explore an exclusive network of professionals and job opportunities custom filtered for your profile and preferences, not another laundry list.' : null}
            {activeSlide == 2 ? 'Refer your friends to managers to hiring managers / opportunities and grow your network through LightSwitch. Successful referrals earn you rewards.' : null}
          </Text>
        }
        <Pagination
          dotsLength={user_type == 1 ? StaticArray.professional_bannerList.length : StaticArray.manager_bannerList.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotView}
          inactiveDotStyle={{
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

        <Buttons
          btnColor={constants.dark_purple}
          title={'Create an account'}
          click={() => navigation.navigate('Login')}></Buttons>

        <TouchableOpacity style={styles.alreadyAccountView}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.alreadyTxt}>Already have an account? </Text>
          <Text style={styles.signInTxt}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alreadyAccountView}
          onPress={() => user_type == 1 ? setUserType(2) : setUserType(1)}
        >
          <Text style={styles.signInTxt}>{user_type == 1 ? 'I’m a PROFESSIONAL' : 'I’m a HIRING MANAGER'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(SwiperScreen);

const styles = StyleSheet.create({
  swiperImg: {
    height: hp("40%"),
    width: wp("60%"),
    alignSelf: 'center',
    borderRadius: 20,
  },
  swiperContiner: {
    alignSelf: "center",
    marginTop: hp('10%')
  },
  titleTxt: {
    marginTop: hp('5%'),
    fontSize: actuatedNormalize(24),
    color: constants.dark_purple,
    textAlign: 'center',
    fontFamily: Fonts.Bold
  },
  subTitleTxt: {
    marginTop: hp('2%'),
    fontSize: actuatedNormalize(15),
    color: constants.grey_Text,
    textAlign: 'center',
    alignSelf: 'center',
    width: wp('80%'),
    fontFamily: Fonts.Regular
  },
  dotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: constants.dark_purple
  },

  alreadyAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('3%')
  },
  alreadyTxt: {
    fontSize: actuatedNormalize(16),
    color: constants.grey_Text,
    textAlign: 'center',
    fontFamily: Fonts.Regular
  },
  signInTxt: {
    fontSize: actuatedNormalize(16),
    color: constants.dark_purple,
    textAlign: 'center',
    fontFamily: Fonts.Bold
  }

})