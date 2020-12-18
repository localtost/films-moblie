import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../../screens/SettingsScreen';
import React from 'react';
import {SettingParamList} from '../types';

const SettingsStack = createStackNavigator<SettingParamList>();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
export default SettingsStackScreen;
