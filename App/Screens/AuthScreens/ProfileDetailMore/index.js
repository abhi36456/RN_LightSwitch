import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    FlatList,
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
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Fonts } from '../../../utils';
import AuthHeader from '../../../Components/AuthHeader';
import { input_placeholder_text, Suggestion_List } from '../../../data';

let looking_for = [{
    item: 'Aws',
    is_close: true
}, {
    item: 'Python',
    is_close: true
}]

const ProfileDetailMore = ({ navigation, title }) => {
    const [currentCompany, setcurrentCompany] = useState('')
    const [prodname, setProdname] = useState('Software Engineer')
    const [blnSearchModal, setblnSearchModal] = useState(false);
    const [e_data, sete_data] = useState(false);
    const [dataList, setDataList] = useState(Suggestion_List);

    const ListSearchModel = () => {
        return (
            <Modal
                backdropOpacity={0}
                useNativeDriver={true}
                animationIn="slideInLeft"
                animationOut="slideOutRight"
                isVisible={blnSearchModal}
                style={{ margin: 0, position: 'absolute' }}
                avoidKeyboard={false}
                onBackButtonPress={() => setblnSearchModal(false)}
            >
                <View
                    style={{
                        width: wp(100), height: hp(100), zIndex: -1,
                        backgroundColor: colors.grey_Background
                    }}
                >
                    <View
                        style={{
                            width: wp(90),
                            alignSelf: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingTop: isIphoneX() ? getStatusBarHeight() * 2 : Platform.OS == "ios" ? 40 : 25,
                        }}>
                        <TouchableOpacity
                            style={{
                                alignSelf: "flex-start",
                                marginBottom: 16
                            }}
                            onPress={() => setblnSearchModal(false)}>
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    width: 25,
                                    height: 25,
                                    alignSelf: "center"
                                }}
                                source={images.back_dark_grey}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_wrapper} onPress={() => { setblnSearchModal(false) }}>
                            <Text style={styles.txt_save}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            width: wp(100),
                            alignSelf: "center"
                        }}>
                        <TextInput
                            autoFocus={true}
                            onChangeText={(text) => {
                                setProdname(text)
                                let data = Suggestion_List.filter(item => {
                                    const query = text.toLowerCase();
                                    return (
                                        (item).toLowerCase().indexOf(query) >= 0
                                    )
                                });
                                setDataList(data)

                            }}
                            value={prodname}
                            placeholder={"Type here.."}
                            style={{ backgroundColor: colors.white_Colors, padding: 16 }}
                        />

                        <View style={{
                            backgroundColor: "#FFF",
                            maxHeight: 300,
                            borderBottomColor: '#efefef',
                            borderLeftColor: '#efefef',
                            borderRightColor: '#efefef',
                            borderTopWidth: 0,
                            marginTop: 16,
                            borderRadius: 10
                        }}>
                            <FlatList
                                style={{ paddingBottom: dataList.length !== 0 ? 10 : 0 }}
                                keyboardShouldPersistTaps={"never"}
                                persistentScrollbar={true}
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={true}
                                bounces={false}
                                data={dataList.length > 0 && dataList}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => {
                                                setProdname(item)
                                            }}>
                                            <View style={{
                                                padding: 6,
                                                paddingLeft: 10,
                                                flexDirection: 'row',
                                                borderColor: colors.grey_Background,
                                                borderBottomWidth: 1.5
                                            }}>
                                                <Text
                                                    style={{
                                                        flex: 1,
                                                        fontSize: 16,
                                                        fontFamily: Fonts.Regular,
                                                        padding: 8
                                                    }}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.mainView}>
            {ListSearchModel()}
            <AuthHeader navigation={navigation} />

            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={'interactive'}
                keyboardShouldPersistTaps={'handled'}>

                <Text style={styles.titleTxt}>What do you do?</Text>
                <View style={styles.viewWrapper}>
                    <>
                        <Text style={{ ...styles.titleTxt, color: colors.violate, fontSize: wp(5), marginBottom: 8 }}>Current Role</Text>
                        <TouchableOpacity
                            onPress={() => { setblnSearchModal(true) }}
                            style={{ ...styles.suggestion_input }}>
                            <Text style={styles.txt_lbl_common}>{prodname}</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                    </>
                    <>
                        <Text style={{ ...styles.titleTxt, color: colors.violate, fontSize: wp(5), marginBottom: 8 }}>Current Company</Text>
                        <TextInput
                            value={currentCompany}
                            secureTextEntry={true}
                            placeholder={input_placeholder_text.current_company}
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
                        {!e_data && looking_for.map((data) => {
                            return (
                                <TouchableOpacity style={styles.paddder} onLongPress={() => { data.is_close = true }}>
                                    {data.is_close && <Image source={images.remove} style={styles.close_ic}></Image>}
                                    <Text style={styles.black_regular}>{data.item}{data.is_close}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={{ marginVertical: wp("8%") }} />
                </View>
                <Buttons btnColor={constants.dark_purple} title={'Confrim'} click={() => navigation.navigate('EnableNotification')}></Buttons>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
            { Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}
        </View >
    );
};

export default React.memo(ProfileDetailMore);
