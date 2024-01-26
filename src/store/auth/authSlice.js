import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  currentThunk,
  logoutThunk,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    logout: state => {
      state.token = '';
      state.user = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(currentThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
