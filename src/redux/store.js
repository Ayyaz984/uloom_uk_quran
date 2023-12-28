import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AppLoadFirstSlice from './features/AppLoadFirstSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import PdfSlice from './features/PdfSlice';
import FavoritesSlice from './features/FavoritesSlice';
import BookmarkSlice from './features/BookmarkSlice';

const rootReducer = combineReducers({
  AppLoadFirst: AppLoadFirstSlice,
  Pdf: PdfSlice,
  Favorites: FavoritesSlice,
  Bookmarks: BookmarkSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['AppLoadFirst', 'Pdf', 'Favorites', 'Bookmarks'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

export {store, persistor};
