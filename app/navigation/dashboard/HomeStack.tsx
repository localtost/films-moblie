import HomeScreen from '../../screens/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';

const SettingsStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
}

export default HomeStackScreen;
