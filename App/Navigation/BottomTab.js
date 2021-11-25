import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Image, StyleSheet } from 'react-native';
import HomeListing from "../Screens/TabScreens/SwipeCard"
import ShoppingScreen from '../Screens/HeaderScreens/ShoppingScreen'
import Icon from 'react-native-vector-icons/Entypo'
import constants from '../Constants/Colors';
import { images } from '../Constants/images';
const Tab = createBottomTabNavigator();
const BottomTab = () => {

    return (
        <Tab.Navigator tabBarOptions={{ activeTintColor: "black" }} screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name="User Home"
                component={HomeListing}
                options={({ route }) => ({
                    tabBarLabel: '',

                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='documents'
                            size={24}
                            color={focused ? constants.title_Colors : '#d9d9d9'}
                        />
                        // <Image
                        //     source={images.card}
                        //     style={{tintColor: focused ? constants.title_Colors : '#d9d9d9',
                        // }}
                        // />
                    ),
                })}

            />
            {/* <Tab.Screen
                name="ShoppingScreen"
                component={ShoppingScreen}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (

                        <Icon
                            name='heart'
                            size={24}
                            color={focused ? constants.title_Colors : '#d9d9d9'}
                        />
                    ),
                })}
            /> */}
            <Tab.Screen
                name="User Setting"
                component={HomeListing}
                options={({ route }) => ({
                    tabBarLabel: '',

                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='user'
                            size={24}
                            color={focused ? constants.title_Colors : '#d9d9d9'}
                        />
                    ),
                })}

            />

        </Tab.Navigator>
    );
};

export default BottomTab;
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

});
