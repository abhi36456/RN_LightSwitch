import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import constant from "../../../Constants/Colors"
import * as roleInterstedArray from "../../../Constants/StaticArray"
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../Utility/index"
import { Input } from "react-native-elements"
import Buttons from "../../../Components/Buttons"
var data =
    [
        { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
        { key: 'Php' }, { key: 'Hadoop' },
    ]


const FiltterScreen = () => {
    const [roleArray, setRoleArray] = useState(roleInterstedArray.roleInterstedArray)
    const [selectedDegree, setSelectedDegree] = useState('')
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
        <View style={{ backgroundColor: constant.white_Colors, }}>





            <FlatList
                data={[
                    { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                    { key: 'Php' }, { key: 'Hadoop' },
                ]}
                style={styles.mainView}
                renderItem={({ item }) =>
                    <Image source={require('../../../Assets/fb.webp')} style={styles.fbImg} ></Image>
                }
                ListHeaderComponent={() => (
                    <View>
                        <View style={styles.headerMainView}>
                            <Text></Text>
                            <Text style={styles.headerTitle}>Filters</Text>
                            <Text style={styles.headerSubTitle}>Clear</Text>

                        </View>
                        <Text style={styles.titleTxt}>
                            Looking For
                        </Text>





                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View>
                                <ScrollView horizontal scrollEnabled={false}>
                                    {roleArray.map((item, index) => (
                                        <View style={styles.rowView}>
                                            {index % 2 == 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>
                                                            {'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>




                                <ScrollView horizontal scrollEnabled={false} style={{ marginTop: hp('3%') }}>
                                    {roleArray.map((item, index) => (
                                        <View style={{ height: hp('6%'), }}>



                                            {index % 2 !== 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>{'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>




                        <Text style={styles.titleTxt}>
                            Prior Employer
                        </Text>


                        <Input
                            placeholder='Search'
                            style={styles.inputMainView}
                            containerStyle={styles.inputContainer}
                            leftIcon={
                                <Icon
                                    name='search'
                                    size={18}
                                    color={constant.light_Grey}
                                    style={{ marginRight: wp('2%') }}
                                />
                            }
                            inputContainerStyle={{ borderColor: constant.light_Grey }}
                        />

                    </View>
                )}
                ListFooterComponent={() =>
                    <View>

                        <Text style={styles.titleTxt}>
                            Looking For
                        </Text>





                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View>
                                <ScrollView horizontal scrollEnabled={false}>
                                    {roleArray.map((item, index) => (
                                        <View style={{ height: hp('6%'), marginTop: hp('5%') }}>
                                            {index % 2 == 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>
                                                            {'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>




                                <ScrollView horizontal scrollEnabled={false} style={{ marginTop: hp('3%') }}>
                                    {roleArray.map((item, index) => (
                                        <View style={{ height: hp('6%'), }}>



                                            {index % 2 !== 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>{'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>

                        <Text style={styles.titleTxt}>
                            Highest Degree
                        </Text>


                        {/* <View style={{ height: hp('7%'), width: wp('90%'), alignSelf: 'center', backgroundColor: constant.title_Colors, marginTop: hp('5%'), flexDirection: 'row', borderRadius: 10 }}>
                            <View style={{ height: hp('7%'), width: wp('22%'), backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: constant.white_Colors, textAlign: 'center' }}>{'High \nSchool'}</Text>
                            </View>



                            <View style={{ height: hp('7%'), width: wp('22%'), backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: constant.white_Colors, textAlign: 'center' }}>{'Bachelors'}</Text>
                            </View>
                            <View style={{ height: hp('7%'), width: wp('22%'), backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: constant.white_Colors, textAlign: 'center' }}>{'Masters'}</Text>
                            </View>
                            <View style={{ height: hp('7%'), width: wp('22%'), backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: constant.white_Colors, textAlign: 'center' }}>{'Doctorate'}</Text>
                            </View>
                        </View> */}

                        <FlatList
                            data={roleInterstedArray.DegreeArray}
                            style={{ marginTop: hp('3%') }}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => setSelectedDegree(item.name)}>
                                    <View style={{ height: hp('7%'), width: wp('22%'), backgroundColor: selectedDegree == item.name ? constant.title_Colors : 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                        <Text style={{ color: selectedDegree == item.name ? constant.white_Colors : constant.black_Text, textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            horizontal
                        />
                        <Text style={styles.titleTxt}>
                            Looking For
                        </Text>





                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View>
                                <ScrollView horizontal scrollEnabled={false}>
                                    {roleArray.map((item, index) => (
                                        <View style={{ height: hp('6%'), marginTop: hp('5%') }}>
                                            {index % 2 == 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>
                                                            {'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>




                                <ScrollView horizontal scrollEnabled={false} style={{ marginTop: hp('3%') }}>
                                    {roleArray.map((item, index) => (
                                        <View style={{ height: hp('6%'), }}>



                                            {index % 2 !== 0 ?
                                                <TouchableOpacity onPress={() => changeValue(item, index)}>
                                                    <View style={{ width: wp('30%'), height: hp('6%'), borderRadius: 10, backgroundColor: item.selected == true ? constant.title_Colors : '#e6e6ff', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: hp('2.5%') }}>
                                                        <Text style={{ marginLeft: wp('3%'), width: wp('20%'), color: item.selected == true ? constant.white_Colors : constant.title_Colors, fontWeight: '800', fontSize: 10 }}>{'Full Stack Engineer '}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                : null}

                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>




                        <Text style={styles.titleTxt}>
                            Prior Employer
                        </Text>


                        <Input
                            placeholder='Search'
                            style={styles.inputMainView}
                            containerStyle={styles.inputContainer}
                            leftIcon={
                                <Icon
                                    name='search'
                                    size={18}
                                    color={constant.light_Grey}
                                    style={{ marginRight: wp('2%') }}
                                />
                            }
                            inputContainerStyle={{ borderColor: constant.light_Grey }}
                        />




                        <FlatList
                            data={[
                                { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                                { key: 'Php' }, { key: 'Hadoop' },
                            ]}
                            style={styles.mainView}
                            renderItem={({ item }) =>
                                <Image source={require('../../../Assets/fb.webp')} style={styles.fbImg} ></Image>
                            }
                            showsVerticalScrollIndicator={false}
                            numColumns={3}
                        />
                        <Buttons buttonTop={hp('5%')} title={'Continue'}> </Buttons>
                    </View>
                }
                ListFooterComponentStyle={{ marginBottom: hp('20%') }}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            />
        </View>
    );
}

export default React.memo(FiltterScreen);















