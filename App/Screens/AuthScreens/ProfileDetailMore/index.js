import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import constants from '../../../Constants/Colors';
import styles from "./style"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import Modal from "react-native-modal";
import { images } from '../../../Constants/images';
import colors from '../../../Constants/Colors';

const ProfileDetailMore = ({ navigation, title }) => {
    const [currentCompany, setcurrentCompany] = useState('')

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

            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={'interactive'}
                keyboardShouldPersistTaps={'handled'}>

                <Text style={styles.titleTxt}>What do you do?</Text>
                <View style={styles.viewWrapper}>
                    <>
                        <Text style={{ ...styles.titleTxt, color: colors.violate, fontSize: wp(5), marginBottom: 8 }}>Current Role</Text>
                        <TouchableOpacity style={{
                            ...styles.inputText,
                            width: wp("80%"),
                            alignSelf: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                            {/* <TextInput
                                value={currentCompany}
                                secureTextEntry={true}
                                placeholder={"Current Role"}
                                style={styles.inputText}
                                onChangeText={(val) => setcurrentCompany(val)}
                            /> */}
                            <Text style={styles.txt_lbl_common}>Software Engineer</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                    </>
                    <>
                        <Text style={{ ...styles.titleTxt, color: colors.violate, fontSize: wp(5), marginBottom: 8 }}>Current Company</Text>
                        <TextInput
                            value={currentCompany}
                            secureTextEntry={true}
                            placeholder={"Current Company"}
                            style={styles.inputText}
                            onChangeText={(val) => setcurrentCompany(val)}
                        />
                    </>
                    <View style={styles.input_row}>
                        <Text style={styles.txt_lbl}>Skills</Text>
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
                        <Text style={styles.txt_lbl}>Looking For</Text>
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
                <Buttons btnColor={constants.dark_purple} title={'Confrim'} click={() => navigation.navigate('EnableNotification')}></Buttons>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
            {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}

            {/* <Modal isVisible={isVisible}>
                
            </Modal> */}
        </View>
    );
};

export default React.memo(ProfileDetailMore);
