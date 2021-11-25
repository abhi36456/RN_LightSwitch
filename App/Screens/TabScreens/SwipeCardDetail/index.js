import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import constant from "../../../Constants/Colors"
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../Utility/index"
const SwipeCardDetail = () => {
    return (
        <View style={{
            flex: 1,

        }}>
            <ScrollView>
                <Image source={require('../../../Assets/swiperImg.webp')} style={styles.titleImg} resizeMode={'stretch'}>

                </Image>

                <View style={styles.mainView}>
                    <Text style={styles.titleTxt}>
                        About
                    </Text>
                    <Text style={styles.subTitleTxt}>
                        Passionate engineer with a love for design. Looking for a job that combines my passions in both areas!


                    </Text>
                    <Text style={styles.titleTxt}>
                        Experience
                    </Text>

                    <View style={styles.subTitleCard}>
                        <Icon name={'close'} color={'blue'} size={30}></Icon>
                        <View style={{ marginLeft: hp('7%') }}>
                            <Text style={styles.cardTitle}>
                                Genral Partner, Founder
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                Xu Ventures
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                2019 - Present .2 years
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                Investing in awesome startups! This is a description of the role and job,.
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.titleTxt}>
                        Education
                    </Text>
                    <View style={styles.subTitleCard}>
                        {/* <Icon name={'close'} color={'blue'} size={30}></Icon> */}
                        <Image source={require('../../../Assets/fb.webp')} style={styles.logoImg} resizeMode={'stretch'}>
                        </Image>
                        <View style={{ marginLeft: hp('3%') }}>
                            <Text style={styles.cardTitle}>
                                Genral Partner, Founder
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                Xu Ventures
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                2019 - Present .2 years
                            </Text>
                            <Text style={styles.cardSubtileTxt}>
                                Investing in awesome startups! This is a description of the role and job,.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default React.memo(SwipeCardDetail);