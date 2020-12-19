import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegistrationStackParamList} from '../types';
import LoginScreen from '../../screens/LoginScreen';

const SettingsStack = createStackNavigator<RegistrationStackParamList>();

function RegistrationStack() {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Login" component={LoginScreen} />
    </SettingsStack.Navigator>
  );
}

export default RegistrationStack;
