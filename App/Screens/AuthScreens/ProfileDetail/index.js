import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet
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

const ProfileDetail = ({ navigation, title }) => {
    const [seletedDate, setSelected] = useState('')
    const [birthday, setBirthday] = useState('Choose birthday date')
    const [isVisible, setVisible] = useState(false)
    return (
        <View style={styles.mainView}>
            <Text style={styles.titleTxt}>Profile details</Text>
            <Image source={{ uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg' }} style={styles.avtarViewImg}></Image>
            <Icon name={'camera'} size={20} color={constants.title_Colors} style={styles.avtarCameraIcon}></Icon>
            <TextInput
                label="First Name"
                style={styles.inputView}
                mode={'outlined'}
                outlineColor={'grey'}
                theme={{ colors: { primary: 'grey', } }}
                underlineColor={'grey'}
            />
            <TextInput
                label="Last Name"
                style={styles.inputView}
                mode={'outlined'}
                outlineColor={'grey'}
                theme={{ colors: { primary: 'grey', } }}
                underlineColor={'grey'}
            />
            <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.birthdayField}>
                    <Icon size={25} color={constants.title_Colors} name={'calendar'}></Icon>
                    <Text style={styles.birthdayTxt}>{birthday}</Text>
                </View>
            </TouchableOpacity>
            <Buttons buttonTop={hp('10%')} title={'Confrim'} click={() => navigation.navigate('RoleIntersted')}></Buttons>
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
                        <Buttons buttonTop={hp('3%')} title={'Save'} click={() => setVisible(false)}></Buttons>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default React.memo(ProfileDetail);
