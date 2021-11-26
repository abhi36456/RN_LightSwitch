import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, FlatList } from 'react-native'
import colors from '../../../../Constants/Colors';
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Utility/index';
import { actuatedNormalize, Fonts } from '../../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileComponent } from '../../components/ProfileComponent';
import { images } from '../../../../Constants/images';
import { TextInput } from 'react-native';
import { Header } from '../../../../Components/commonHeader';
import { jobDetail, jobsList } from '../../../../data';
import { CultureComponent, JobsListComponent } from '../../components';
import { windowWidth } from '../../../../Constants';

const ManagerJobs = ({ navigation, props }) => {
    const [selected_type, setSelectedType] = useState(1)
    const [linkedin, seLlinkedin] = useState("Linin:app.com")

    const { companyName, companyDescription, jobDescription, keyResponsibilities, requirements, compensation, culture } = jobDetail

    const renderEdit = () => {
        return (
            <ScrollView style={{ flex: 1, alignSelf: "center" }}>
                <TouchableOpacity style={styles.button_wrapper} onPress={() => { setSelectedType(1) }}>
                    <Text style={styles.txt_save}>Save</Text>
                </TouchableOpacity>
                <>
                    <View style={{ marginVertical: wp("1%") }} />
                    <View style={{ alignSelf: "center" }}>
                        <Image
                            source={images.color_eg}
                            style={styles.profile_ic}
                        />
                        <Image
                            source={images.upload_camera}
                            style={styles.camera_ic}
                        />
                    </View>
                    <View style={{ marginVertical: wp("2%") }} />
                    <View style={{ width: wp("100%"), alignSelf: "center" }}>
                        <Text style={styles.txt_lbl}>Role</Text>
                        <View style={styles.borderview} />
                        <TouchableOpacity style={styles.input_wrapper}>
                            <Text style={styles.txt_lbl_common}>Software Engineer</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                        <View style={styles.borderview} />
                        <Text style={styles.txt_lbl}>Job Type</Text>
                        <View style={styles.borderview} />
                        <TouchableOpacity style={styles.input_wrapper}>
                            <Text style={styles.txt_lbl_common}>Full-Time</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                        <View style={styles.borderview} />
                        <Text style={styles.txt_lbl}>Company</Text>
                        <View style={styles.borderview} />
                        <TouchableOpacity style={styles.input_wrapper}>
                            <Text style={styles.txt_lbl_common}>Uber</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                        <View style={styles.borderview} />
                        <Text style={styles.txt_lbl}>Company Stage</Text>
                        <View style={styles.borderview} />
                        <TouchableOpacity style={styles.input_wrapper}>
                            <Text style={styles.txt_lbl_common}>IPO</Text>
                            <Image source={images.next_arrow} style={styles.next_ic} />
                        </TouchableOpacity>
                        <View style={styles.borderview} />
                        <Text style={styles.txt_lbl}>linkedin</Text>
                        <View style={styles.borderview} />
                        <TextInput
                            style={{ ...styles.txt_lbl, color: '#0094FF' }}
                            value={linkedin}
                            onChangeText={(val) => { seLlinkedin(val) }}
                            placeholder={"linkedin"}
                        />
                        <View style={styles.borderview} />
                        <Text style={styles.txt_lbl}>About</Text>
                        <View style={styles.borderview} />
                        <TextInput
                            style={{ ...styles.txt_lbl, color: '#0094FF' }}
                            value={linkedin}
                            onChangeText={(val) => { seLlinkedin(val) }}
                            placeholder={"linkedin"}
                        />
                        <View style={{ marginVertical: wp("8%") }} />
                    </View>
                </>
            </ScrollView>
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
            </View>
            <View style={{ marginVertical: selected_type == 1 ? wp("2%") : wp("4%") }} />

            {selected_type == 1 ?
                renderEdit()

                :
                <View style={{ alignSelf: "center", flex: 0.9 }}>
                    <ScrollView style={{ ...styles.slider_view, alignSelf: "center" }}>
                        <View style={{ marginHorizontal: '6%' }}>
                            <JobsListComponent
                                item={jobsList[0]}
                                color={colors.violate}
                                fromDetail={true} />


                            <Text style={styles.blue_regular}>www.linkedin.com/in/aharper</Text>
                            <Text style={styles.headingText}>
                                {`About ${companyName}`}
                            </Text>
                            <Text style={styles.text}>
                                {companyDescription}
                            </Text>
                            <Text style={styles.headingText}>
                                {`About the job`}
                            </Text>
                            <Text style={styles.text}>
                                {jobDescription}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Key Responsibilities:`}
                            </Text>
                            <Text style={styles.text}>
                                {keyResponsibilities}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Requirements:`}
                            </Text>
                            <Text style={styles.text}>
                                {requirements}
                            </Text>
                            <Text style={styles.subHeadingText}>
                                {`Compensation:`}
                            </Text>
                            <Text style={styles.text}>
                                {compensation}
                            </Text>

                            <View style={{ ...styles.row, flexWrap: 'wrap', width: windowWidth * 0.9 }}>
                                {culture.map((item, i) => {
                                    return (
                                        <CultureComponent item={item}
                                            width={windowWidth * 0.4}
                                        />
                                    )
                                })}
                            </View>
                        </View>

                    </ScrollView>
                </View>
            }

        </View >
    )
}

export default ManagerJobs;

