import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {UserStackParamList} from '../types';
import UserScreen from '../../screens/UserScreen';

const SettingsStack = createStackNavigator<UserStackParamList>();

function UserStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="User" component={UserScreen} />
    </SettingsStack.Navigator>
  );
}
export default UserStackScreen;
