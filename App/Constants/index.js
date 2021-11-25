import {Platform, Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const windowWidth = width;
export const windowHeight = height;
export const aspectRatio = windowHeight / windowWidth;
export const plateformIOS = Platform.OS === 'ios' ? true : false;
export const statusbarHeight = plateformIOS ? 0 : StatusBar.currentHeight;
export const headerHeight = 36;
