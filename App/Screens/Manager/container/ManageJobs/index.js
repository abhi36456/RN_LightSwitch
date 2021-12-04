import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, Text, View, Image, PermissionsAndroid, KeyboardAvoidingView } from 'react-native'
import colors from '../../../../Constants/Colors';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../../../../Constants/images';
import { TextInput } from 'react-native';
import { Header } from '../../../../Components/commonHeader';
import { jobDetail, jobsList } from '../../../../data';
import { CultureComponent, JobsListComponent } from '../../components';
import { windowWidth } from '../../../../Constants';
import * as ImagePicker from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import PickerModel from '../pickerModel';

let Suggestion_List = [
    "Software Engineer",
    "Software developer",
    "Sonta Luis",
    "Sonta Devops",
    "Developer",
    "Project Managaer",
]


const ManagerJobs = ({ navigation, props }) => {
    const [selected_type, setSelectedType] = useState(1)
    const [linkedin, setLlinkedin] = useState("Linin:app.com")
    const [about, setAbout] = useState("Linin:app.com")
    const [profileObject, setProfileObject] = useState(null);
    const [dataList, setDataList] = useState(Suggestion_List);
    const [blnSearchModal, setblnSearchModal] = useState(false);
    const { companyName, companyDescription, jobDescription, keyResponsibilities, requirements, compensation, culture } = jobDetail
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
                    <TouchableOpacity style={styles.button_wrapper} onPress={() => { setSelectedType(1) }}>
                        <Text style={styles.txt_save}>Save</Text>
                    </TouchableOpacity>
                    <>
                        <View style={{ marginVertical: wp("1%") }} />
                        <TouchableOpacity
                            onPress={() => {
                                refRBSheet.current?.open()
                            }}
                            style={{ alignSelf: "center" }}>
                            <Image
                                borderRadius={100}
                                source={profileObject && profileObject != '' ? { uri: profileObject.uri ? profileObject.uri : profileObject } : images.color_eg}
                                style={styles.profile_ic}
                            />
                            <Image
                                source={images.upload_camera}
                                style={styles.camera_ic}
                            />
                        </TouchableOpacity>
                        <View style={{ marginVertical: wp("2%") }} />
                        <View style={{ width: wp("100%"), alignSelf: "center" }}>
                            <Text style={styles.txt_lbl}>Role</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>Software Engineer</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Job Type</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>Full-Time</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Company</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>Uber</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Company Stage</Text>
                            <View style={styles.borderview} />
                            <TouchableOpacity style={styles.input_wrapper} onPress={() => { setblnSearchModal(true) }}>
                                <Text style={styles.txt_lbl_common}>IPO</Text>
                                <Image source={images.next_arrow} style={styles.next_ic} />
                            </TouchableOpacity>
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Link</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={{ ...styles.txt_lbl, ...styles.input_wrapper_2 }}
                                value={linkedin}
                                onChangeText={(val) => { setLlinkedin(val) }}
                                placeholder={"linkedin"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>About the Company</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={{ ...styles.txt_lbl, ...styles.input_wrapper_2 }}
                                value={about}
                                onChangeText={(val) => { setAbout(val) }}
                                placeholder={"linkedin"}
                            />
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
            <>
                <Header
                    back_icons
                    onBackPress={() => navigation.goBack()}
                />
            </>

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
            </View>
            <View style={{ marginVertical: selected_type == 1 ? wp("2%") : wp("4%") }} />

            {selected_type == 1 ?
                renderEdit()

                :
                <View style={{ alignSelf: "center", flex: 0.95 }}>
                    <ScrollView style={{ ...styles.slider_view, alignSelf: "center" }}>
                        <View style={{ marginHorizontal: '6%' }}>
                            <JobsListComponent
                                item={jobsList[0]}
                                color={colors.violate}
                                fromDetail={true} />


                            <Text style={styles.blue_regular}>www.linkedin.com/in/aharper</Text>
                            <Text style={styles.headingText}>
                                {`About ${companyName}`}
                            </Text>
                            <Text style={styles.text}>
                                {companyDescription}
                            </Text>
                            <Text style={styles.headingText}>
                                {`About the job`}
                            </Text>
                            <Text style={styles.text}>
                                {jobDescription}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Key Responsibilities:`}
                            </Text>
                            <Text style={styles.text}>
                                {keyResponsibilities}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Requirements:`}
                            </Text>
                            <Text style={styles.text}>
                                {requirements}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Compensation:`}
                            </Text>
                            <Text style={styles.text}>
                                {compensation}
                            </Text>

                            <View style={{ ...styles.row, flexWrap: 'wrap', width: windowWidth * 0.9 }}>
                                {culture.map((item, i) => {
                                    return (
                                        <CultureComponent item={item}
                                            width={windowWidth * 0.4}
                                        />
                                    )
                                })}
                            </View>
                        </View>

                    </ScrollView>
                </View>
            }

        </View >
    )
}

export default ManagerJobs;

