import HomeScreen from '../../screens/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {Logout} from '../../state/login/actionCreaters';

const SettingsStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  const dispatch = useDispatch();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          headerRight: () => {
            return (
              <Button title="Sign Out" onPress={() => dispatch(Logout())} />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default HomeStackScreen;
