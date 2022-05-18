import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const createStore = () => {
  const store = configureStore({
    //root reducer
    reducer: { auth: authSlice.reducer },
  });
  return store;
};

const wrapper = createWrapper(createStore);

export const authActions = authSlice.actions;
// export default store;
export default wrapper;
