import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOutAction } from './authActions';
import hendlerError from '../error/handleError';
import * as api from '../../utils/api';

const Error = {
  AUTH_FAILED: 'Invalid email or password.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    await api.register(credentials);
    const { data } = await api.login(credentials);
    api.token.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 409') {
      return rejectWithValue('Provided email already exists');
    }
    return rejectWithValue(Error.UNKNOWN);
  }
});

const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.login(credentials);
    api.token.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 403') {
      return rejectWithValue("Email doesn't exist / Password is wrong");
    }
    return rejectWithValue(Error.UNKNOWN);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, { rejectWithValue, dispatch }) => {
  try {
    await api.logout();
    api.token.unset();
  } catch (error) {
    setTimeout(() => {
      dispatch(hendlerError({ error, cb: logOut }));
    }, 0);
    return rejectWithValue(Error.UNKNOWN);
  }
});

const getAuthUser = createAsyncThunk(
  'auth/getUser',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const token = getState().auth.accessToken;
    api.token.set(token);
    try {
      const { data } = await api.getUser();
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(hendlerError({ error, cb: getAuthUser }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

const newBalance = createAsyncThunk(
  'auth/newBalance',
  async (balance, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.updateBalance(balance);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(hendlerError({ error, cb: newBalance }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken, sid } = getState().auth;
    try {
      api.token.set(refreshToken);
      const { data } = await api.refresh({ sid });
      api.token.set(data.newAccessToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logOutAction());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export { register, login, logOut, getAuthUser, newBalance, refreshToken };
