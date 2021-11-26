import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Header from "../../../../Components/HeaderComponent";
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import constant from "../../../../Constants/Colors";
import * as CardArray from '../../../../Constants/StaticArray';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../../Utility/index"
import { images } from '../../../../Constants/images';
import { ScrollView } from 'react-native';
import { ProfileComponent } from '../../components/ProfileComponent';

const DiscoverPeople = ({ navigation }) => {

    const Card = (value) => {
        return (
           
          <ProfileComponent />
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
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header backgray={true}
                navigation={navigation}
                title={'Discover'}
                subTitle={'candidates'}
                rightFirstIcon={'sliders'} ></Header>
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
                <TouchableOpacity style={styles.buttonView}>
                    <Image
                        resizeMode={"contain"}
                        style={styles.img_ic}
                        source={images.remove} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonView}>
                    <Image
                        resizeMode={"contain"}
                        style={styles.img_star}
                        source={images.star} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default React.memo(DiscoverPeople);

