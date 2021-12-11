import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Header } from '../../../../Components/commonHeader';
import { windowWidth } from '../../../../Constants';
import { jobDetail } from '../../../../data';
import { colors } from '../../../../utils';
import { CultureComponent, JobsListComponent } from '../../components';
import styles from './style';

const JobDetail = (props) => {
    const { data } = props.route.params
    const { companyName, companyDescription, jobDescription, keyResponsibilities, requirements, compensation, culture } = jobDetail
    return (
        <>
            <Header
                back_icons
                onBackPress={() => props.navigation.goBack()}
            />

            <SafeAreaView style={styles.container}>
                <View style={{ flex: 0.9 }}>
                    <ScrollView style={styles.scroll_container}>
                        <View style={{ marginHorizontal: '5%' }}>
                            <JobsListComponent
                                item={data}
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
            </SafeAreaView>
        </>
    )
}

export default JobDetail;
