import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {useSafeArea} from 'react-native-safe-area-context';
import {View} from 'react-native';
import HomeStackScreen from './dashboard/HomeStack';
import SettingsStackScreen from './dashboard/SettingStack';
import PinedStackScreen from './dashboard/PinedStack';
import {RootStackParamList} from './types';
import UserStackScreen from './dashboard/UserStack';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Pushpino" component={PinedStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Setting" component={SettingsStackScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            // eslint-disable-next-line react-hooks/rules-of-hooks
            height: useSafeArea().bottom - 5,
            backgroundColor: 'white',
          }}
        />
      )}
    </NavigationContainer>
  );
}
