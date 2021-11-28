import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';
import JobsList from '../Screens/Manager/container/JobsList';
import JobDetail from '../Screens/Manager/container/JobDetail';
import DiscoverdPeople from '../Screens/Manager/container/DiscoverdPeople';
import MyFilter from '../Screens/Manager/container/MyFilter';
import ManagerJobs from '../Screens/Manager/container/ManageJobs';

const Stack = createStackNavigator();
const ManagerJobsStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="JobList"
        component={JobsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiscoverdPeople"
        component={DiscoverdPeople}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FiltterScreen"
        component={MyFilter}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ManagerJobs"
        component={ManagerJobs}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default ManagerJobsStack;
