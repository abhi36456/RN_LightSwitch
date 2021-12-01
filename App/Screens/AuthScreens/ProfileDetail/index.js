import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import constants from '../../../Constants/Colors';
import styles from "./style"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars"
import { images } from '../../../Constants/images';
import { FloatingLabelInput } from 'react-native-floating-label-input';


const ProfileDetail = ({ navigation, title }) => {
    const [seletedDate, setSelected] = useState('')
    const [birthday, setBirthday] = useState('Choose birthday date')
    const [isVisible, setVisible] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')


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

                <Text style={styles.titleTxt}>Tell us about you</Text>
                <Image source={images.photo}
                    style={styles.avtarViewImg}></Image>

                <Image source={images.camera} style={styles.avtarCameraIcon} />
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

                <TextInput
                    label="Linkedin URL"
                    style={styles.inputView}
                    mode={'outlined'}
                    outlineColor={'rgba(0, 0, 0, 0.4)'}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                />
                {/* <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.birthdayField}>
                    <Icon size={25} color={constants.title_Colors} name={'calendar'}></Icon>
                    <Text style={styles.birthdayTxt}>{birthday}</Text>
                </View>
            </TouchableOpacity> */}
                <Buttons buttonTop={hp('10%')} btnColor={constants.dark_purple} title={'Continue'} click={() => navigation.navigate('ProfileDetailMore')}></Buttons>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
            {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}

            <Modal isVisible={isVisible}>
                <View style={{ flex: 1 }}>
                    <View style={styles.calendarMainView}>
                        <Calendar
                            theme={styles.calendarTheme}
                            hideDayNames={true}
                            markedDates={seletedDate}
                            onDayPress={(day) => {
                                setSelected({ [day.dateString]: { selected: true, selectedColor: constants.title_Colors } })
                                setBirthday(day.dateString)
                            }}
                        />
                        <Buttons buttonTop={hp('3%')} btnColor={constants.dark_purple} title={'Save'} click={() => setVisible(false)}></Buttons>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default React.memo(ProfileDetail);
