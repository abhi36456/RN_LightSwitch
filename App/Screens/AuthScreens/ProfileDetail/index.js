import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    PermissionsAndroid,
    Platform
} from 'react-native';
import constants from '../../../Constants/Colors';
import styles from "./style"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons";
import { images } from '../../../Constants/images';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import Toast from 'react-native-simple-toast';


const ProfileDetail = ({ navigation, title }) => {
    const refRBSheet = useRef()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [url_social, setSocialUrl] = useState('')

    const [profileObject, setProfileObject] = useState(null);



    const onContinue = () => {
        if (firstname == '') {
            Toast.show('Please enter the firstname');
        } else if (lastname == '') {
            Toast.show('Please enter the lastname');
        } else if (url_social == '') {
            Toast.show('Please enter the linkedin url');
        } else {
            navigation.navigate('ProfileDetailMore')
        }
    }
    // laucnch Gallery anb Camera 
    const openGallery = (doc_type) => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 500,
                maxWidth: 500,
            },
            async (response) => {
                const result = response.assets[0];
                setProfileObject(result)
            },
        )
    }

    const openCamera = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                onlaunchCamera()
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const onlaunchCamera = () => {
        ImagePicker.launchCamera(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 500,
                maxWidth: 500,
            },
            async (response) => {
                const result = response.assets[0];
                setProfileObject(result)
            },
        )
    }




    const _renderRBSheet = () => {
        return (
            <RBSheet
                ref={refRBSheet}
                height={isIphoneX() ? 150 : 130}
                openDuration={250}
                customStyles={{ container: { borderTopLeftRadius: 0, borderTopRightRadius: 0 } }}>
                <View style={styles.rbSheetViewContainer}>
                    <TouchableOpacity activeOpacity={0.7}
                        style={{ padding: 4 }}
                        onPress={() => {
                            refRBSheet.current?.close()
                            setTimeout(() => {
                                openGallery()
                            }, 500);
                        }}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.rbSheetImage}
                            source={images.gallery}
                        />
                        <Text style={styles.rbSheetText}>Open Gallery</Text>

                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => {
                            refRBSheet.current?.close()
                            setTimeout(() => {
                                Platform.OS == "android" ? openCamera() : onlaunchCamera()
                            }, 500);
                        }}
                        style={{ padding: 4 }}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.rbSheetImage}
                            source={images.cameras}
                        />
                        <Text style={styles.rbSheetText}>Open Camera</Text>
                    </TouchableOpacity>

                </View>
            </RBSheet >
        )
    }
    return (
        <View style={styles.mainView}>
            {_renderRBSheet()}

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

            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={'interactive'}
                keyboardShouldPersistTaps={'handled'}>

                <Text style={styles.titleTxt}>Tell us about you</Text>
                <TouchableOpacity
                    onPress={() => {
                        refRBSheet.current?.open()
                    }}
                >
                    <Image
                        source={profileObject && profileObject != '' ? { uri: profileObject.uri ? profileObject.uri : profileObject } : images.photo}
                        style={styles.avtarViewImg}>
                    </Image>

                    <Image source={images.camera} style={styles.avtarCameraIcon} />
                </TouchableOpacity>
                {/* <Icon name={'camera'} size={20} color={constants.title_Colors} style={styles.avtarCameraIcon}></Icon> */}
                <TextInput
                    label="First Name"
                    style={styles.inputView}
                    mode={'outlined'}
                    outlineColor={'rgba(0, 0, 0, 0.4)'}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)' } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={firstname}
                    onChangeText={(val) => { setFirstname(val) }}
                />

                <TextInput
                    label="Last Name"
                    style={styles.inputView}
                    mode={'outlined'}
                    outlineColor={'rgba(0, 0, 0, 0.4)'}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={lastname}
                    onChangeText={(val) => { setLastname(val) }}
                />

                <View style={{ flexDirection: "row", marginTop: hp('2%'), alignSelf: "center" }}>
                    <Text style={{ alignSelf: "center", marginTop: 8, marginRight: 8 }}>
                        www.linkedin.com/in/
                    </Text>
                    <TextInput
                        label="Linkedin URL"
                        style={[styles.inputView, { width: wp(42), marginTop: 0 }]}
                        mode={'outlined'}
                        outlineColor={'rgba(0, 0, 0, 0.4)'}
                        theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                        underlineColor={'rgba(0, 0, 0, 0.4)'}
                        value={url_social}
                        onChangeText={(val) => { setSocialUrl(val) }}
                    />
                </View>
                <View style={{ marginTop: hp('10%') }} />
                <Buttons btnColor={constants.dark_purple} title={'Continue'} click={() => onContinue()}></Buttons>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
            {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}

        </View>
    );
};

export default React.memo(ProfileDetail);
