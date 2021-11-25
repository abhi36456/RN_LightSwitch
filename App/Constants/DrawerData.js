import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../Utility';
import constants from './Colors';
import * as Utility from "../Utility"
var userName = ''
const DrawerData = ({ navigation }) => {

    const goToRoute = async (value) => {
        if (value.route == 'Logout') {
            await Signout()
        }
        else {
            navigation.navigate(value.route)

        }
    }


    const Signout = async () => {
        Alert.alert(
            '',

            'Are you sure want to sign out?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Button Pressed'),
                    style: 'cancel',
                },

                { text: 'Sign out', onPress: () => removeAuth() },
            ],
        );
    };
    const removeAuth = async () => {
        await Utility.removeAuthKey('token')
        await Utility.removeAuthKey('userId')
        navigation.navigate('Login')

    }

    const getUserInfo = () => {
       
    }
    return (
        <View style={{}}>
            {/* <View style={{ width:wp('80%'),backgroundColor:'white',height:hp('100%'),right:wp('10%') }}> */}






            <View style={{ height: hp('30%'), width: Platform.OS == 'android' ? wp('65%') : wp('72%'), backgroundColor: constants.title_Colors, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                <Image source={{ uri: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg' }}
                    style={{ height: 120, width: 120, alignSelf: "center", marginTop: hp('5%'), borderRadius: 100 }}></Image>
                {getUserInfo()}
            </View>
            <FlatList
                data={[
                    { key: 'Privacy Policy', route: 'PrivacyPolicy', iconName: 'file-text-o' },
                    { key: 'Change Password', route: 'ChangePassword', iconName: 'unlock-alt' },
                    { key: 'Contact US', route: 'ContactUs', iconName: 'address-book-o' },
                    { key: 'Term & Condition', route: 'TermCondition', iconName: 'file-text-o' },
                    { key: "Logout", route: 'Logout', iconName: 'sign-out' }

                ]}
                // style={{ marginTop: hp('5%') }}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => goToRoute(item)}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: wp('50%'), alignSelf: "center", marginTop: hp('2%') }}>
                            <Text style={{ textAlign: "center", marginTop: hp('5%'), color: constants.title_Colors, fontSize: 17 }}>
                                {item.key}
                            </Text>
                            <Icon
                                name={item.iconName}
                                size={28}
                                color={constants.title_Colors}
                                style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: hp('5%')
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    // angle-right
                }
            />
            {/* </View> */}
        </View>
    );
}

export default DrawerData;