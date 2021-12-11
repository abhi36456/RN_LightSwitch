import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import constants from '../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index';
import * as StaticArray from "../../../Constants/StaticArray"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Buttons from '../../../Components/Buttons';
import colors from '../../../Constants/Colors';
import styles from "./style"
import { constant_string } from '../../../data';

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
            {activeSlide == 0 ? constant_string.Professional_texts[0] : null}
            {activeSlide == 1 ? constant_string.Professional_texts[1] : null}
            {activeSlide == 2 ? constant_string.Professional_texts[2] : null}
          </Text>
          :
          <Text style={styles.subTitleTxt}>
            {activeSlide == 0 ? constant_string.Hiring_manager_texts[0] : null}
            {activeSlide == 1 ? constant_string.Hiring_manager_texts[1] : null}
            {activeSlide == 2 ? constant_string.Hiring_manager_texts[2] : null}
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

