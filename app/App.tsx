import React from 'react';
import MainStack from './navigation/MainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
};
export default App;
