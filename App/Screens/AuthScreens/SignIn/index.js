import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import constants from '../../../Constants/Colors';
import styles from "./style"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast';

const Signin = ({ navigation, title }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [is_show, setIsShow] = useState(true)

    const onContinue = () => {
        if (username == '') {
            Toast.show('Please enter the username');
        } else if (password == '') {
            Toast.show('Please enter the password');
        } else {
            navigation.navigate('ManagerTabs')
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={{ marginVertical: hp(10) }} />
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={'interactive'}
                keyboardShouldPersistTaps={'handled'}>
                <Text style={styles.titleTxt}>Sign In</Text>
                <TextInput
                    label="Username"
                    style={styles.inputView}
                    mode={'outlined'}
                    outlineColor={'rgba(0, 0, 0, 0.4)'}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)' } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={username}
                    onChangeText={(val) => { setUsername(val) }}
                />
                <TextInput
                    label="Password"
                    style={styles.inputView}
                    mode={'outlined'}
                    right={<TextInput.Icon name={is_show ? "eye-off" : "eye"} onPress={() => { setIsShow(!is_show) }} />}
                    secureTextEntry={is_show ? true : false}
                    outlineColor={'rgba(0, 0, 0, 0.4)'}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={password}
                    onChangeText={(val) => { setPassword(val) }}
                />
                <View style={{ marginVertical: hp(5) }} />
                <Buttons btnColor={constants.dark_purple} title={'Continue'}
                    click={() => {
                        onContinue()
                    }}>
                </Buttons>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
            {Platform.OS == 'ios' && <KeyboardAvoidingView behavior={'padding'} />}
        </View>
    );
};

export default React.memo(Signin);
