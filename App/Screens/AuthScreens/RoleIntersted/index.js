import React, { useState, useRef } from 'react';
import { Text, View, ImageBackground, Alert, TextInput, FlatList } from 'react-native';
import constants from '../../../Constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../../../Utility/index';
import Icon from "react-native-vector-icons/FontAwesome"
import styles from './style';
import * as roleInterstedArray from "../../../Constants/StaticArray"
import Buttons from '../../../Components/Buttons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { strings, colors, fonts, urls, PATH } = constants;
const RoleIntersted = ({ navigation, title }) => {
    const [roleArray, setRoleArray] = useState(roleInterstedArray.roleInterstedArray)
    const changeValue = (itemSelected, index) => {
        const newData = roleArray.map(item => {
            if (item.id == itemSelected.id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return {
                ...item,
                selected: item.selected,
            };
        });
        setRoleArray(newData);
    };
    return (
        <View style={{}}>

            <Text style={styles.titleTxt}>Roles of Interest</Text>
            <Text style={styles.subTitleTxt}>
                Select a few of your interests and let everyone know what you’re passionate about.
            </Text>

            <FlatList
                data={roleArray}
                style={styles.flatListMainView}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => changeValue(item, index)}>
                        <View style={{ width: wp('40%'), marginTop: hp('3%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constants.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                            <Icon size={20} color={item.selected == true ? constants.white_Colors : constants.title_Colors} name={item.iconName}></Icon>
                            <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constants.white_Colors : constants.title_Colors, fontWeight: '800', fontSize: 12 }}>{item.roleName}</Text>
                        </View>
                    </TouchableOpacity>
                }
                numColumns={2}
            />
            <Buttons buttonTop={hp('20%')} title={'Continue'} click={() => navigation.navigate('InviteNetwork')}></Buttons>
        </View>
    );
};

export default React.memo(RoleIntersted);




















