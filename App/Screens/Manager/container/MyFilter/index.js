import React, { lazy, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import constant from "../../../../Constants/Colors"
import * as roleInterstedArray from "../../../../Constants/StaticArray"
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../../Utility/index"
import { Header } from '../../../../Components/commonHeader';
import { images } from '../../../../Constants/images';
import PickerModel from '../pickerModel';
import { Suggestion_List } from '../../../../data';


const FiltterScreen = () => {
    const [dataList, setDataList] = useState(Suggestion_List);
    const [blnSearchModal, setblnSearchModal] = useState(false);

    return (
        <View style={{ backgroundColor: constant.white_Colors, flex: 1 }}>

            <PickerModel
                blnSearchModal={blnSearchModal}
                dataList={dataList}
                backDropPress={() => { setblnSearchModal(!blnSearchModal) }}
                onChangePress={(text) => {
                    // setProdname(text)
                    let data = Suggestion_List.filter(item => {
                        const query = text.toLowerCase();
                        return (
                            (item).toLowerCase().indexOf(query) >= 0
                        )
                    });
                    setDataList(data)

                }}
                onSelectedPress={() => { setblnSearchModal(!blnSearchModal) }}
            />
            <Header
                headerText={"Filters"}
                back_icons={false}
                right_side
            />
            <View style={{ marginVertical: wp("3%") }} />
            <ScrollView style={styles.main_row}>
                <View style={styles.title_row}>
                    <Text style={styles.titleTxt}>
                        Current Role
                     </Text>
                    <TouchableOpacity onPress={() => { setblnSearchModal(true) }}>
                        <Image source={images.image_add} style={styles.img_animated} />
                    </TouchableOpacity>
                </View>

                <View style={styles.inner_row}>
                    <View style={styles.paddder}>
                        <Image source={images.remove} style={styles.close_ic}></Image>
                        <Text style={styles.black_regular}>Uber</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Image source={images.remove} style={styles.close_ic}></Image>
                        <Text style={styles.black_regular}>Apple</Text>
                    </View>
                </View>


                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Current Company
                     </Text>
                        <TouchableOpacity onPress={() => { setblnSearchModal(true) }}>
                            <Image source={images.image_add} style={styles.img_animated} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Skills
                     </Text>
                        <TouchableOpacity onPress={() => { setblnSearchModal(true) }}>
                            <Image source={images.image_add} style={styles.img_animated} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Looking For
                     </Text>
                        <TouchableOpacity onPress={() => { setblnSearchModal(true) }}>
                            <Image source={images.image_add} style={styles.img_animated} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Gender
                     </Text>
                        <TouchableOpacity onPress={() => { setblnSearchModal(true) }}>
                            <Image source={images.image_add} style={styles.img_animated} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Male</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Female</Text>
                        </View>
                    </View>
                </>

            </ScrollView>

        </View>
    );
}

export default React.memo(FiltterScreen);















