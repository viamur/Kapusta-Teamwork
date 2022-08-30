import { createSlice } from '@reduxjs/toolkit';
import { logOutAction } from './authActions';
import { register, login, refreshToken, logOut, getAuthUser, newBalance } from './authOperations';

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
  reducers: {
    googleAuth(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  extraReducers: {
    /* =====================REGISTER==================== */
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
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
      state.isLoading = false;
      state.error = payload;
    },
    /* ======================GET USER===================  */
    [getAuthUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getAuthUser.fulfilled]: (state, { payload }) => {
      const { email, balance, transactions } = payload;
      state.email = email;
      state.balance = balance;
      state.transactions = transactions;
      state.isLoading = false;
    },
    [getAuthUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
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
      state.isLoading = false;
      state.state.error = payload;
    },
    /* ================= REFRESH ======================*/
    [refreshToken.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      const { newAccessToken, newRefreshToken, newSid } = payload;
      state.accessToken = newAccessToken;
      state.sid = newSid;
      state.refreshToken = newRefreshToken;
      state.isLoading = false;
    },
    [refreshToken.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* =================NEW BALANCE================= */
    [newBalance.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [newBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload.newBalance;
      state.isLoading = false;
    },
    [newBalance.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* =================ACTION============== */
    [logOutAction]: () => {
      return { ...initialState };
    },
  },
});

export const { googleAuth } = slice.actions;
export default slice.reducer;
