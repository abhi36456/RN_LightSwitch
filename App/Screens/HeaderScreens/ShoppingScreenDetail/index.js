import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index'
import HeaderComponent from '../../../Components/HeaderComponent';
import constant from '../../../Constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const ShoppingScreenDetail = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <View style={styles.cardMainView}>

                    <View style={styles.cardHeaderSubView}>

                        <Text style={styles.cardTxtSubView}>Software Engineer</Text>
                        <Image source={require('../../../Assets/pin.webp')} style={styles.cardHeaderSubImg} resizeMode={'stretch'}>

                        </Image>
                    </View>
                    <Text style={styles.uberTxt}>Uber</Text>
                    <View style={styles.locationBtnView}>
                        <Icon name={'map-marker'} color={'red'} size={15}></Icon>

                        <Text style={styles.locationBtnTxt}>San Fan</Text>

                    </View>

                    <View style={styles.subTitleTxtView}>
                        <Icon name={'shopping-bag'} color={constant.light_Grey} size={25}></Icon>

                        <Text style={styles.subTitleTxt}>Full-time. Mid-Senior Level</Text>
                    </View>
                    <View style={styles.subTitleTxtView}>
                        <Icon name={'building-o'} color={constant.light_Grey} size={25}></Icon>

                        <Text style={styles.subTitleTxt}>1-10 Employes</Text>
                    </View>

                    <Image source={require('../../../Assets/playBack.webp')} style={styles.playBackImg} resizeMode={'stretch'}>

                    </Image>
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.titleTxt}>
                        About the Company
                    </Text>
                    <Text style={styles.subTitleTxt2}>
                        InDebted is changing the way organisations recover outstanding accounts by combining human values with compelling messaging and data-driven decisions. We do this to deliver on our mission to be the preferred choice of customers to support their debt free journey, everywhere. </Text>

                    <Text style={styles.titleTxt}>
                        AAbout the Job
                    </Text>
                    <Text style={styles.subTitleTxt2}>
                        Looking for a driven self starter.

                        Key Responsibilities:
                        Work closely with the founding CEO to define the product vision and technical strategy, and ultimately drive the execution of this vision
                        Set up the technology infrastructure, processes, and best practices for a credit card issuance platform from the ground up - selecting stack, defining architecture, etc.

                        Requirements:
                        5+ years of relevant experience, with related technical education or qualifications; ideally in building and scaling fintech technical solutions in the US
                        Experience building highly performant and reliable API solutions for technology companies
                        Capability to drive product build on both front-end and back-end with a start-up/agile mindset
                        Proven track record in technical leadership roles, hiring, managing and growing a team
                        Nice to Have:

                        Compensation:
                        Significant equity ownership
                        Competitive compensation
                        Market competitive health insurance and benefits


                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default ShoppingScreenDetail;