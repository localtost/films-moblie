import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabBar';
import HomeStackScreen from './HomeStack';
import PinedStackScreen from './PinedStack';
import UserStackScreen from './UserStack';
import {Dimensions, View} from 'react-native';
import {RootStackParamList} from '../types';
import {Theme} from '../../utils/theme';

const Tab = createBottomTabNavigator<RootStackParamList>();

const ButtonStack = () => {
  const tabbed: number = Dimensions.get('window').height;
  return (
    <>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Pushpino" component={PinedStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
      </Tab.Navigator>
      <View
        style={{
          height: tabbed / 55,
          backgroundColor: Theme.darkenSlateBlue,
        }}
      />
    </>
  );
};
export default ButtonStack;
