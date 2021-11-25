import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Header from "../../../Components/HeaderComponent"
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/FontAwesome'
import constant from "../../../Constants/Colors"
import * as CardArray from '../../../Constants/StaticArray'
import styles from './style'
const SwipeCard = ({ navigation }) => {

    const Card = (value) => {
        return (

            <ImageBackground source={value.imagePath} style={styles.swiperImage} borderRadius={20} resizeMode={'stretch'}></ImageBackground>
        )
    }

    const NoMoreCard = () => {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    }


    const handleYup = (card) => {
        console.log(`Yup for ${card.text}`)
    }
    const handleNope = (card) => {
        console.log(`Nope for ${card.text}`)
    }
    const handleMaybe = (card) => {
        console.log(`Maybe for ${card.text}`)
    }




    return (
        <View style={{ flex: 1, }}>

            <Header navigation={navigation} title={'Connect '} subTitle={'with Professionals'} rightFirstIcon={'sliders'} rightSecondIcon={'shopping-bag'}></Header>
            <View style={styles.mainView}>
            <SwipeCards
                    cards={CardArray.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCard></NoMoreCard>}

                handleYup={handleYup}
                handleNope={handleNope}
                handleMaybe={handleMaybe}
                hasMaybeAction

                />
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

export default React.memo(SwipeCard);

