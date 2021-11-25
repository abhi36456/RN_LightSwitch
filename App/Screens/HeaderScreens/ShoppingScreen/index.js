import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../Utility/index'
import HeaderComponent from '../../../Components/HeaderComponent';
import constant from '../../../Constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
const ShoppingScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <HeaderComponent navigation={navigation} title={'Find '} subTitle={'opportunities'} rightFirstIcon={'sliders'} rightSecondIcon={'users'}></HeaderComponent>
            <View style={styles.cardMainView}>
                <View style={styles.cardHeaderMainView}>
                    <Image source={require('../../../Assets/slider2.webp')} style={styles.cardHeaderImg} resizeMode={'stretch'}>

                    </Image>
                    <Text style={{ marginLeft: wp('2%') }}>Joey the Hiring Manager</Text>
                </View>
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
            <View style={styles.iconMainView}>
                <Icon name={'close'} size={25} color={constant.orange_Color}></Icon>
                <TouchableOpacity onPress={() => navigation.navigate('SwipeCardDetail')}>
                    <Icon name={'star'} size={25} color={constant.purple_Color}></Icon>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default ShoppingScreen;