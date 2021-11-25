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

const DiscoverPeople = ({ navigation }) => {

    const Card = (value) => {
        return (
            <ScrollView style={styles.slider_view}>
                <Image
                    source={images.user_round}
                    style={{
                        width: wp("24%"),
                        height: wp("24%"),
                        alignSelf: "center",
                        marginBottom: wp('5%')
                    }}
                />
                <Text style={styles.bold_title}>Anna Herper</Text>
                <Text style={styles.bold_regular}>Software Engineer @ Uber </Text>
                <Text style={styles.blue_regular}>www.linkedin.com/in/aharper</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <Text style={styles.bold_title}>Skills</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={styles.flex_row}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>React</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>AWS</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Python</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Javascript</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Kubernetes</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Cloud</Text>
                    </View>
                </View>
                <View style={{ marginVertical: wp("2%") }} />
                <Text style={styles.bold_title}>Looking For</Text>
                <View style={{ marginVertical: wp("2%") }} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Software Engineer</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Text style={styles.black_regular}>Full-Stack Engineer</Text>
                    </View>
                </View>
            </ScrollView>
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

