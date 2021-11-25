import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { windowHeight, windowWidth } from '../../../../Constants';
import { jobDetail } from '../../../../data';
import { actuatedNormalize, colors, Fonts } from '../../../../utils';
import fonts from '../../../../utils/fonts';
import { CultureComponent, JobsListComponent, TagComponent } from '../../components';

const JobDetail = (props) => {
    const { data } = props.route.params
    const { companyName, companyDescription, jobDescription, keyResponsibilities, requirements, compensation, culture } = jobDetail
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: '5%' }}>
                    <JobsListComponent
                        item={data}
                        color={colors.violate}
                        fromDetail={true} />

                    {/* <View style={[styles.row,styles.tags]}>
            <TagComponent 
            text={'Sustainability'}
            backgroundColor={colors.unSelectTag}
            width={windowWidth*0.35}
            />
            <TagComponent 
            text={'Healthcare'}
            backgroundColor={colors.unSelectTag}
            width={windowWidth*0.35}
            />
            </View> */}

                    {/* <Image source={{uri:'https://blog.vantagecircle.com/content/images/2020/08/respect-in-the-workplace-1.png'}}
            style={styles.image}/> */}
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
        </SafeAreaView>
    )
}

export default JobDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tags: {
        marginVertical: 10,
        justifyContent: 'space-between',
        width: windowWidth * 0.8,
        alignSelf: 'center'
    },
    image: {
        height: windowHeight * 0.3,
        width: windowWidth,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    headingText: {
        fontSize: actuatedNormalize('20'),
        fontFamily: fonts.Bold,
        color: colors.violate,
        marginVertical: '5%'
    },
    subHeadingText: {
        fontSize: actuatedNormalize('18'),
        fontFamily: fonts.Bold,
        color: colors.black,
        marginVertical: '5%'
    },
    text: {
        fontSize: actuatedNormalize('16'),
        fontFamily: fonts.Regular
    },
    blue_regular: {
        fontSize: actuatedNormalize("16"),
        color: "#0094FF",
        fontFamily: Fonts.Italic,
    },
})
