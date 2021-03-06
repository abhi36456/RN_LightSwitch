import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, KeyboardAvoidingView, Image, findNodeHandle } from 'react-native'
import colors from '../../../../Constants/Colors';
import { images } from '../../../../Constants/images';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { Header } from '../../../../Components/commonHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Fire_side_event } from '../../../../data';
import { Spacer } from '../../../../utils/spacer';

const MyFireSide = ({ navigation, props }) => {
    const [selected_type, setSelectedType] = useState(1)
    const [eventname, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [s_date, setDate] = useState('')
    const [s_time, setTime] = useState('')
    const [about, setAbout] = useState('')

    const renderEdit = () => {
        return (
            <>
                <ScrollView
                    style={styles.scroll_container}>
                    <>
                        <View style={{ marginVertical: wp("1%") }} />
                        <TouchableOpacity style={styles.button_wrapper} onPress={() => { setSelectedType(1) }}>
                            <Text style={styles.txt_save}>Save</Text>
                        </TouchableOpacity>
                        <View style={{ marginVertical: wp("1%") }} />
                        <View style={{ width: wp("100%"), alignSelf: "center" }}>
                            <Text style={styles.txt_lbl}>Event Name</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={eventname}
                                onChangeText={(val) => { setEventName(val) }}
                                placeholder={"Event Name"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Location</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={location}
                                onChangeText={(val) => { setLocation(val) }}
                                placeholder={"Location"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Date</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={s_date}
                                onChangeText={(val) => { setDate(val) }}
                                placeholder={"Date"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>Time</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                style={styles.txtInput}
                                value={s_time}
                                onChangeText={(val) => { setTime(val) }}
                                placeholder={"Time"}
                            />
                            <View style={styles.borderview} />
                            <Text style={styles.txt_lbl}>About</Text>
                            <View style={styles.borderview} />
                            <TextInput
                                multiline={true}
                                style={{ ...styles.txtInput, height: wp("50%") }}
                                value={about}
                                onChangeText={(val) => { setAbout(val) }}
                                placeholder={"About"}
                            />
                            <View style={styles.borderview} />
                            <View style={{ marginVertical: wp("8%") }} />
                        </View>

                    </>
                </ScrollView>
                {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}
            </>
        )
    }

    const renderView = () => {
        return (
            <View style={{ alignSelf: "center", flex: 0.95 }}>
                <ScrollView
                    style={styles.slider_view}>
                    <View style={{ padding: wp("6%") }}>
                        <Image
                            borderRadius={100}
                            source={images.elon}
                            resizeMode={"cover"}
                            style={styles.profile_ic}
                        />
                        <Text style={styles.bold_title}>{Fire_side_event.name}</Text>
                        <Text style={styles.bold_regular}>{Fire_side_event.designation}</Text>
                        <Text style={styles.blue_regular}>{Fire_side_event.social_link}</Text>
                    </View>
                    <View style={{ backgroundColor: colors.violate, height: 1, width: wp(100) }} />
                    <View style={{ padding: wp("6%") }}>
                        <Text style={styles.bold_title}>Virtual AMA</Text>
                        <View style={{ ...styles.row, marginVertical: 10 }}>
                            <FontAwesome5 name={'users'} size={18} color={colors.violate} />
                            <Text style={{ ...styles.subText }}>{Fire_side_event.Virtual_AMA.people}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome5 name={'map'} size={18} color={colors.violate} style={{ marginRight: 5 }} />
                            <Text style={{ ...styles.subText }}>{Fire_side_event.Virtual_AMA.city}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome5 name={'calendar'} size={18} color={colors.violate} style={{ marginRight: 5 }} />
                            <Text style={{ ...styles.subText }}>{Fire_side_event.Virtual_AMA.date}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome5 name={'clock'} size={18} color={colors.violate} style={{ marginRight: 5 }} />
                            <Text style={{ ...styles.subText }}>{Fire_side_event.Virtual_AMA.time}</Text>
                        </View>
                        <Text style={styles.headingText}>
                            {`About`}
                        </Text>
                        <Text style={styles.text}>
                            {Fire_side_event.Virtual_AMA.about}
                        </Text>
                    </View>
                    <View style={{ marginVertical: wp("5%") }} />
                </ScrollView>
            </View >
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white_Colors
        }}>
            <>
                <Header
                    back_icons
                    onBackPress={() => navigation.goBack()}
                />
            </>
            <View style={{ marginVertical: wp("2%") }} />
            <View style={styles.tab_container}>
                <TouchableOpacity style={{ padding: 8 }} onPress={() => { setSelectedType(1) }}>
                    <Text style={{ ...styles.tab_fonts, color: selected_type == 1 ? colors.violate : colors.black_gray }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8 }}
                    onPress={() => { setSelectedType(2) }}>
                    <Text style={{ ...styles.tab_fonts, color: selected_type == 2 ? colors.violate : colors.black_gray }}>View</Text>
                </TouchableOpacity>
            </View>
            <Spacer space={wp("2%")} />

            {selected_type == 1 ? renderEdit() : renderView()}

        </View>
    )
}

export default MyFireSide;

