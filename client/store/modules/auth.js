import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  users: {
    accessToken: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.users = {
        accessToken: action.payload.accessToken,
      };
    },
    logout(state) {
      state.isAuthenticated = false;
      state.users = {
        accessToken: null,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
