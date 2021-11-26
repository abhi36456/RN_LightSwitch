import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Alert, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import constants from '../Constants/Colors';
import JobsList from '../Screens/Manager/container/JobsList';
import ManagerJobsStack from './ManagerJobsStack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../Utility/index';
import { images } from '../Constants/images';
import ProfileScreen from '../Screens/Manager/container/ProfileScreen';
import ManagerJobs from '../Screens/Manager/container/ManageJobs';
const Tab = createBottomTabNavigator();
const ManagerTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName={"User Setting"}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#F3F3F3',
                }
            }}
        >

            <Tab.Screen
                name="User Home"
                component={ManagerJobsStack}
                options={({ route }) => ({
                    tabBarLabel: '',

                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? images.card_active : images.card_inactive}
                            style={styles.bottom_image}
                        />
                    ),
                })}

            />
            <Tab.Screen
                name="Logout"
                component={ManagerJobs}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={images.logout}
                            style={styles.bottom_image}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="User Setting"
                component={ProfileScreen}
                options={({ route }) => ({
                    tabBarLabel: '',

                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? images.people_active : images.people_inactive}
                            style={styles.bottom_image}
                        />
                    ),
                })}

            />

        </Tab.Navigator>
    );
};

export default ManagerTabs;

const styles = StyleSheet.create({

    tabImg2: {
        alignSelf: 'center',
        tintColor: 'grey',
        height: 25,
        width: 30,
    },
    selectedTabImg2: {
        alignSelf: 'center',
        tintColor: 'black',
        height: 25,
        width: 30,
    },
    bottom_image: {
        width: wp('6%'),
        height: wp('6%'),
        alignSelf: 'center',
    }
});
