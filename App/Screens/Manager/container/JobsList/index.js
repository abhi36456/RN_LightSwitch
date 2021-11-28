
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList
} from 'react-native';
import { jobsList } from '../../../../data';
import { actuatedNormalize, colors, Fonts } from '../../../../utils';
import { Header, JobsListComponent } from '../../components';
import NotificationsPopup from '../NotificationsPopup';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../Utility/index';

const JobsList = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true)
  const [ismenuVisible, setMenuVisible] = useState(false)


  return (

    <SafeAreaView style={styles.container}>
      <Header
        title={''}
        subTitle={''}
        onPress={() => { setMenuVisible(!ismenuVisible) }}
      />
      {/* <NotificationsPopup
        onpress={() => { setVisible(false) }}
        title={"Welcome to \n LightSwitch!"}
        sub_title={"As a LightSwitch hiring manager you can connect directly with candidates interested in opportunities you post."}
        bottomTile={" "}
        isVisible={isVisible} /> */}
      <View style={{ marginHorizontal: '5%' }}>

        {
          ismenuVisible &&
          <View style={styles.viewContainer}>
            <TouchableOpacity style={{ padding: 2, paddingBottom: 4 }}>
              <Text style={styles.txt_style}>Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 2 }}>
              <Text style={styles.txt_style}>Fireside</Text>
            </TouchableOpacity>
          </View>
        }
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: '20%' }}
          data={jobsList}
          renderItem={({ item }) => (
            <JobsListComponent item={item}
              navigation={navigation}
              onPress={() => navigation.navigate('JobDetail', { data: item })}
            />)}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  txt_style: {
    fontSize: actuatedNormalize(16),
    color: colors.violate,
    fontFamily: Fonts.Regular
  },
  viewContainer: {
    width: wp("35%"),
    position: "absolute",
    paddingHorizontal: 6,
    paddingVertical: 12,
    right: 0,
    zIndex: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1
  }
})

export default React.memo(JobsList);
