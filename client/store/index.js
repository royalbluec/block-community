// import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { createWrapper } from 'next-redux-wrapper';

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// // const createStore = () => {
// //   const store = configureStore({
// //     //root reducer
// //     reducer: { auth: authSlice.reducer },
// //   });
// //   return store;
// // };

// const reducers = combineReducers({
//   auth: authSlice.reducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedReducer = persistReducer(persistConfig, reducers);

// const createStore = () => {
//   const store = configureStore({
//     reducer: persistedReducer,
//   });
//   return store;
// };

// const wrapper = createWrapper(createStore);

// export const authActions = authSlice.actions;
// // export default store;
// export default wrapper;

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './modules';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
