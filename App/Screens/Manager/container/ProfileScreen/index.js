import React, { useState } from 'react';
import { ScrollView, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import colors from '../../../../Constants/Colors';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileComponent } from '../../components/ProfileComponent';
import { images } from '../../../../Constants/images';
import { TextInput } from 'react-native';

const ProfileScreen = (props) => {
    const [selected_type, setSelectedType] = useState(1)
    const [Name, setName] = useState('')
    const [currentRole, setCurrentRole] = useState('')
    const [currentCompany, setCurrentCompany] = useState('')

    const renderEdit = () => {
        return (
            <>
                <ScrollView style={{ flex: 1, alignSelf: "center" }}>
                    <>
                        <View style={{ marginVertical: wp("1%") }} />
                        <View style={{ alignSelf: "center" }}>
                            <Image
                                source={images.user_round}
                                style={styles.profile_ic}
                            />
                            <Image
                                source={images.upload_camera}
                                style={styles.camera_ic}
                            />
                        </View>
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
                            <TextInput
                                style={styles.txtInput}
                                value={currentRole}
                                onChangeText={(val) => { setCurrentRole(val) }}
                                placeholder={"Current Role"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Current Company</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={currentCompany}
                                onChangeText={(val) => { setCurrentCompany(val) }}
                                placeholder={"Current Company"}
                            />
                            <View style={styles.borderview} />


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
                    onPress={() => { props.navigation.navigate('MyFireSide') }}>
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

