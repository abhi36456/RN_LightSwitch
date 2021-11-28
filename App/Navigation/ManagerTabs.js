import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Alert, Image, StyleSheet } from 'react-native';
import ManagerJobsStack from './ManagerJobsStack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../Utility/index';
import { images } from '../Constants/images';
import ProfileScreen from '../Screens/Manager/container/ProfileScreen';
import MyFireSide from '../Screens/Manager/container/MyFireside';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ManagerProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyFireSide"
          component={MyFireSide}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    );
  };

const ManagerTabs = () => {
    let isTabVisible = true
    return (
        <Tab.Navigator
            initialRouteName={"User Home"}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#F3F3F3',
                    width: wp("70%"),
                    alignSelf: "center",
                    display: getTabBarVisibility(route) ? 'flex' : 'none'
                }
            })
            }
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
                name="User Setting"
                component={ManagerProfileStack}
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


const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['FiltterScreen'];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
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
