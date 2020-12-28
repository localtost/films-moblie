import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../state/films/watcher';
const key = 'films data';
const config = {
  key,
  storage: AsyncStorage,
  blacklist:['filmsState']
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware),
);
export const persistor = persistStore(store);
export default store;
sagaMiddleware.run(rootSaga);
