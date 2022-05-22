import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';

import reducer from './modules';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const wrapper = createWrapper(() => store);
