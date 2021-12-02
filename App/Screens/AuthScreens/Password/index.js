import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import colors from '../../../Constants/Colors';
import { actuatedNormalize, Fonts } from '../../../utils';
import { images } from '../../../Constants/images';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast';

const Password = ({ navigation, title }) => {

    const [password, setPassword] = useState('')
    const [is_show, setIsShow] = useState(true)

    const onContinue = () => {
        if (password == '') {
            Toast.show('Please enter the password');
        } else {
            navigation.navigate('ProfileDetail')
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <View style={styles.headerSubContainer}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backWrapper}>
                        <Image
                            resizeMode={'contain'}
                            source={images.back_pink}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.titleTxt}>Create Password</Text>
            <View style={styles.viewWrapper}>
               
                <TextInput
                    label="Password"
                    style={styles.inputView}
                    mode={'outlined'}
                    right={<TextInput.Icon name={is_show ? "eye-off" : "eye"} onPress={() => { setIsShow(!is_show) }} />}
                    secureTextEntry={is_show ? true : false}
                    outlineColor={colors.grey_Background}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={password}
                    onChangeText={(val) => { setPassword(val) }}
                />
            </View>
            <Buttons
                btnColor={colors.dark_purple}
                buttonTop={hp('8%')}
                click={() => onContinue()}
                title={'Continue'}>
            </Buttons>
        </View>
    );
};

export default React.memo(Password);
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white_Colors
    },
    titleTxt: {
        fontSize: actuatedNormalize(34),
        fontFamily: Fonts.Bold,
        color: 'black',
        marginTop: hp('5%'),
        width: wp('80%'),
        alignSelf: 'center',
    },

    subTitleTxt: {
        fontSize: actuatedNormalize(15),
        color: colors.light_black,
        marginTop: hp('1%'),
        width: wp('80%'),
        alignSelf: 'center',
    },
    inputText: {
        padding: 16,
        borderColor: colors.grey_Background,
        borderRadius: 12,
        borderWidth: 1,
        fontFamily: Fonts.Regular
    },
    inputImg: {
        height: hp("15%"),
        width: wp("80%"),
        alignSelf: 'center',
        marginTop: hp('5%')
    },
    viewWrapper: {
        alignSelf: "center",
        width: wp('80%'),
        marginTop: hp('5%')
    },
    header: {
        backgroundColor: constants.white_Colors,
        ...ifIphoneX(
            {
                paddingTop: getStatusBarHeight() + 20
            },
            {
                paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 15 : 20 // for android 
            }
        )
    },
    headerSubContainer: {
        flexDirection: 'row',
        width: wp("95%"),
        alignSelf: 'center',
    },
    backWrapper: {
        justifyContent: 'center',
        borderRadius: 12,
        borderColor: constants.grey_Background,
        borderWidth: 1,
        marginLeft: 16,
        padding: 16,
    },
    backIcon: {
        width: 15,
        height: 15,
        tintColor: constants.dark_purple,
        alignSelf: 'center'
    },

});