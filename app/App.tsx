import React from 'react';
import MainStack from './navigation/MainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
