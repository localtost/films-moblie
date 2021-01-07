import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ButtonStack from './dashboard/ButtomStack';
import {useSelector} from '../utils/declaration';
import RegistrationStack from './auth/Registration';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './types';

const Main = createStackNavigator<MainStackParamList>();

export default function MainStack(): JSX.Element {
  const {auth} = useSelector((state) => state.loginState);
  return (
    <NavigationContainer>
      <Main.Navigator
        headerMode="none"
        screenOptions={{
          animationTypeForReplace: !auth ? 'pop' : 'push',
        }}>
        {auth ? (
          <Main.Screen name="Main" component={ButtonStack} />
        ) : (
          <Main.Screen name="Auth" component={RegistrationStack} />
        )}
      </Main.Navigator>
    </NavigationContainer>
  );
}
