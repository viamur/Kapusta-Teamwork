import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logOut } from './operations';
import * as api from '../../utils/api';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  idUser: null,
  email: null,
  balance: null,
  transactions: null,
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    /* =====================REGISTER==================== */
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      const { email, id } = payload;
      state.email = email;
      state.idUser = id;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ======================LOGIN===================  */
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.idUser = userData.id;
      state.email = userData.email;
      state.balance = userData.balance;
      state.transactions = userData.transactions;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLogining = false;
      state.error = payload;
    },
    /* ================LOGOUT======================= */
    [logOut.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => ({
      ...initialState,
    }),
    [logOut.rejected]: (state, { payload }) => {
      state.isLogouting = false;
      state.error = payload;
    },
    /* ================= REFRESH ======================*/
    [refresh.pending]: (state, _) => {
      state.isRefreshing = true;
      state.error = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      const { newAccessToken, newRefreshToken: refreshToken, newSid: sid } = payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.error = null;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { token, resetAuthState } = slice.actions;
