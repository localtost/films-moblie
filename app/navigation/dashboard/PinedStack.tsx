import {createStackNavigator} from '@react-navigation/stack';
import PinedScreen from '../../screens/PinedScreen';
import React from 'react';
import {PinedStackParamList} from '../types';

const SettingsStack = createStackNavigator<PinedStackParamList>();

function PinedStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Pined" component={PinedScreen} />
    </SettingsStack.Navigator>
  );
}
export default PinedStackScreen;
