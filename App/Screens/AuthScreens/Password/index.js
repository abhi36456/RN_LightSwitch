import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from '../../../Utility/index';
import Buttons from "../../../Components/Buttons"
import colors from '../../../Constants/Colors';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import AuthHeader from '../../../Components/AuthHeader';
import { constant_string } from '../../../data';
import styles from './style';

const Password = ({ navigation, title }) => {

    const [password, setPassword] = useState('')
    const [is_show, setIsShow] = useState(true)

    const onContinue = () => {
        if (password == '') {
            Toast.show(constant_string.Please_enter_the_password);
        } else {
            navigation.navigate('ProfileDetail')
        }
    }

    return (
        <View style={styles.mainView}>
            <AuthHeader navigation={navigation} />
            <Text style={styles.titleTxt}>Create Password</Text>
            <View style={styles.viewWrapper}>
                <TextInput
                    label="Password"
                    style={styles.inputView}
                    mode={'outlined'}
                    right={<TextInput.Icon name={is_show ? "eye-off" : "eye"} onPress={() => { setIsShow(!is_show) }} />}
                    secureTextEntry={is_show ? true : false}
                    outlineColor={colors.grey_Background}
                    theme={{ colors: { primary: 'rgba(0, 0, 0, 0.4)', } }}
                    underlineColor={'rgba(0, 0, 0, 0.4)'}
                    value={password}
                    onChangeText={(val) => { setPassword(val) }}
                />
            </View>
            <Buttons
                btnColor={colors.dark_purple}
                buttonTop={hp('8%')}
                click={() => onContinue()}
                title={'Continue'}>
            </Buttons>
        </View>
    );
};

export default React.memo(Password);