import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {UserStackParamList} from '../types';
import UserScreen from '../../screens/UserScreen';
import {Theme} from '../../utils/theme';

const SettingsStack = createStackNavigator<UserStackParamList>();

function UserStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Theme.darkenSlateBlue},
      }}>
      <SettingsStack.Screen name="User" component={UserScreen} />
    </SettingsStack.Navigator>
  );
}
export default UserStackScreen;
