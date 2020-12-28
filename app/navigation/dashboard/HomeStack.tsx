import HomeScreen from '../../screens/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import HomeHeader from '../../components/headers/HomeHeader';
import {Theme} from '../../utils/theme';
import {getFilmsData} from '../../state/films/actionCreators';
import {useSelector} from '../../utils/declaration';
const SettingsStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.filmsState);
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          headerRight: () => {
            return (
              <Button
                disabled={!value}
                title="Search"
                color="white"
                onPress={() => dispatch(getFilmsData())}
              />
            );
          },
          headerTitle: '',
          headerLeft: () => <HomeHeader />,
          headerStyle: {backgroundColor: Theme.darkenSlateBlue},
        }}
        name="Home"
        component={HomeScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default HomeStackScreen;
