import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {View, Dimensions} from 'react-native';
import HomeStackScreen from './dashboard/HomeStack';
import SettingsStackScreen from './dashboard/SettingStack';
import PinedStackScreen from './dashboard/PinedStack';
import {RootStackParamList} from './types';
import UserStackScreen from './dashboard/UserStack';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainStack(): JSX.Element {
  const tabbed: number = Dimensions.get('window').height;
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Pushpino" component={PinedStackScreen} />
        <Tab.Screen name="Scan1" component={UserStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Setting" component={SettingsStackScreen} />
      </Tab.Navigator>
      <View
        style={{
          height: tabbed / 35,
          backgroundColor: 'white',
        }}
      />
    </NavigationContainer>
  );
}
