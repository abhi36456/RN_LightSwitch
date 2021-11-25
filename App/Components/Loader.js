import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {StyleSheet} from 'react-native';
const Loader = ({navigation, isLoading}) => {
  return (
    <Spinner
      allowFontScaling={false}
      visible={isLoading}
      textContent={`Please Wait`}
      textStyle={styles.spinnerTextStyle}
      animation="slide"
      color={'rgba(83, 178, 232, 1)'}
      textStyle={{color: 'white', fontSize: 20}}
    />
  );
};
export default Loader;
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#9D0932',
  },
});
