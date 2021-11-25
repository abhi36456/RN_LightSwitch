
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList
} from 'react-native';
import { jobsList } from '../../../../data';
import { colors } from '../../../../utils';
import { Header, JobsListComponent } from '../../components';
import NotificationsPopup from '../NotificationsPopup';

const JobsList = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true)

  return (

    <SafeAreaView style={styles.container}>
      <Header
        title={'Jobs'}
        subTitle={`You're hiring for`}
      />
      <NotificationsPopup
        onpress={() => { setVisible(false) }}
        title={"Welcome to \n LightSwitch!"}
        sub_title={"As a LightSwitch hiring manager you can connect directly with candidates interested in opportunities you post."}
        bottomTile={" "}
        isVisible={isVisible} />
      <View style={{ marginHorizontal: '5%' }}>
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
  }
})

export default React.memo(JobsList);
