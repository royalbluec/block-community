import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './features/authSlice';

const rootReducer = combineReducers({ authSlice });

export default rootReducer;
