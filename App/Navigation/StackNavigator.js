import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/AuthScreens/Splash';
import Login from '../Screens/AuthScreens/Login/Index';
import SignUp from '../Screens/AuthScreens/SignUp';

import OtpVerfiy from "../Screens/AuthScreens/OtpVerify"
import SwiperScreen from '../Screens/AuthScreens/SwiperScreen';
import ProfileDetail from "../Screens/AuthScreens/ProfileDetail"
import RoleIntersted from "../Screens/AuthScreens/RoleIntersted"
import InviteNetwork from '../Screens/AuthScreens/InviteNetwork';
import EnableNotification from "../Screens/AuthScreens/EnableNotification"
import BottomTab from './BottomTab';
import FiltterScreen from '../Screens/HeaderScreens/FiltterScreen';
import SwipeCardDetail from '../Screens/TabScreens/SwipeCardDetail'
import ShoppingScreen from '../Screens/HeaderScreens/ShoppingScreen'
import ShoppingScreenDetail from '../Screens/HeaderScreens/ShoppingScreenDetail'
import ManagerTabs from './ManagerTabs';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>


      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShoppingScreenDetail"
        component={ShoppingScreenDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SwipeCardDetail"
        component={SwipeCardDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FiltterScreen"
        component={FiltterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwiperScreen"
        component={SwiperScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoleIntersted"
        component={RoleIntersted}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EnableNotification"
        component={EnableNotification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InviteNetwork"
        component={InviteNetwork}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />

       <Stack.Screen
        name="OtpVerfiy"
        component={OtpVerfiy}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="ManagerTabs"
      component={ManagerTabs}
      options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
