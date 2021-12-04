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
import constants from '../../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../../Utility/index';
import Modal from "react-native-modal";
import { images } from '../../../../Constants/images';
import colors from '../../../../Constants/Colors';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Fonts } from '../../../../utils';
import { actuatedNormalize } from '../../../utils';

const pickerModel = (props) => {
    return (
        <Modal
            backdropOpacity={0}
            useNativeDriver={true}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            isVisible={props.blnSearchModal}
            style={{ margin: 0, position: 'absolute' }}
            avoidKeyboard={false}
            onBackButtonPress={() => props.backDropPress()}
        >

            <View
                style={{
                    width: wp(100),
                    height: hp(100),
                    zIndex: -1,
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
                        onPress={() => props.backDropPress()}>
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

                </View>

                <View
                    style={{
                        width: wp(100),
                        alignSelf: "center"
                    }}>
                    <TextInput
                        autoFocus={true}
                        onChangeText={(text) => {
                            props.onChangePress(text)
                        }}
                       // value={prodname}
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
                            style={{ paddingBottom: props.dataList.length !== 0 ? 10 : 0 }}
                            keyboardShouldPersistTaps={"never"}
                            persistentScrollbar={true}
                            nestedScrollEnabled={true}
                            showsVerticalScrollIndicator={true}
                            bounces={false}
                            data={props.dataList.length > 0 && props.dataList}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            props.onSelectedPress()
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

export default React.memo(pickerModel);
