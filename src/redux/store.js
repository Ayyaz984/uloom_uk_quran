import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AppLoadFirstSlice from './features/AppLoadFirstSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({
  AppLoadFirst: AppLoadFirstSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['AppLoadFirst'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

export {store, persistor};
