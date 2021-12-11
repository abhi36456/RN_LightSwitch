import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import colors from '../../../../Constants/Colors';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileComponent } from '../../components/ProfileComponent';
import { images } from '../../../../Constants/images';
import { TextInput } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import PickerModel from '../pickerModel';
import { Suggestion_List } from '../../../../data';


const ProfileScreen = (props) => {
    const [selected_type, setSelectedType] = useState(1)
    const [Name, setName] = useState('')
    const [profileObject, setProfileObject] = useState(null);
    const [dataList, setDataList] = useState(Suggestion_List);
    const [blnSearchModal, setblnSearchModal] = useState(false);
    const refRBSheet = useRef()

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

    const renderEdit = () => {
        return (
            <>
                <ScrollView style={{ flex: 1, alignSelf: "center" }}>
                    <>
                        <View style={{ marginVertical: wp("1%") }} />
                        <TouchableOpacity
                            onPress={() => {
                                refRBSheet.current?.open()
                            }} style={{ alignSelf: "center" }}>
                            <Image
                                borderRadius={100}
                                source={profileObject && profileObject != '' ? { uri: profileObject.uri ? profileObject.uri : profileObject } : images.user_round}
                                style={styles.profile_ic}
                            />
                            <Image
                                source={images.upload_camera}
                                style={styles.camera_ic}
                            />
                        </TouchableOpacity>
                        <View style={{ marginVertical: wp("2%") }} />
                        <View style={{ width: wp("100%"), alignSelf: "center" }}>
                            <Text style={styles.txt_lbl}>Name</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={Name}
                                onChangeText={(val) => { setName(val) }}
                                placeholder={"Name"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Current Role</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>Software Engineer</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Current Company</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>Uber</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />


                            <View style={styles.input_row}>
                                <Text style={{ ...styles.txt_lbl, width: wp(80), }}>Skills</Text>
                                <Image source={images.image_add} style={styles.img_add} />
                            </View>

                            <View style={styles.inner_row}>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Aws</Text>
                                </View>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Python</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: wp("2%") }} />
                            <View style={styles.inner_row}>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Javascript</Text>
                                </View>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Cloud</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: wp("2%") }} />
                            <View style={styles.input_row}>
                                <Text style={{ ...styles.txt_lbl, width: wp(80), }}>Looking For</Text>
                                <Image source={images.image_add} style={styles.img_add} />
                            </View>

                            <View style={styles.inner_row}>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Aws</Text>
                                </View>
                                <View style={styles.paddder}>
                                    <Image source={images.remove} style={styles.close_ic}></Image>
                                    <Text style={styles.black_regular}>Python</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: wp("8%") }} />
                        </View>

                    </>
                </ScrollView>
                {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}
            </>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white_Colors
        }}>
            {_renderRBSheet()}
            <PickerModel
                blnSearchModal={blnSearchModal}
                dataList={dataList}
                backDropPress={() => { setblnSearchModal(!blnSearchModal) }}
                onChangePress={(text) => {
                    // setProdname(text)
                    let data = Suggestion_List.filter(item => {
                        const query = text.toLowerCase();
                        return (
                            (item).toLowerCase().indexOf(query) >= 0
                        )
                    });
                    setDataList(data)

                }}
                onSelectedPress={() => { setblnSearchModal(!blnSearchModal) }}
            />
            <>
                <View style={styles.header}>
                    <View style={styles.headerSubContainer}>
                        <Text style={[styles.headerText, { flex: 1 }]}>{"Profile"}</Text>
                    </View>
                </View>
            </>
            <View style={{ marginVertical: wp("2%") }} />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ padding: 8 }} onPress={() => { setSelectedType(1) }}>
                    <Text
                        style={{
                            fontFamily: Fonts.Bold,
                            color: selected_type == 1 ? colors.violate : colors.black_gray,
                            fontSize: actuatedNormalize(24)
                        }}
                    >Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8 }} onPress={() => { setSelectedType(2) }}>
                    <Text
                        style={{
                            fontFamily: Fonts.Bold,
                            color: selected_type == 2 ? colors.violate : colors.black_gray,
                            fontSize: actuatedNormalize(24)
                        }}
                    >View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8 }}
                    onPress={() => { alert("Coming soon") }}>
                    <Text
                        style={{
                            fontFamily: Fonts.Bold,
                            color: selected_type == 3 ? colors.violate : colors.black_gray,
                            fontSize: actuatedNormalize(24)
                        }}
                    >Pay</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: wp("2%") }} />

            {selected_type == 1 ?
                renderEdit()

                :
                <View style={{ alignSelf: "center", flex: 0.95 }}>
                    <ProfileComponent />
                </View>
            }

        </View>
    )
}

export default ProfileScreen;

