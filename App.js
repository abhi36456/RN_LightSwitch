import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './App/Redux/configureStore';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import MainStackNavigator from './App/Navigation/StackNavigator';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
