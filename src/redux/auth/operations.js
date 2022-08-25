import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const Error = {
  AUTH_FAILED: 'Invalid email or password.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    await api.register(credentials);
    const { data } = await api.login(credentials);
    api.token(data.accessToken);
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

const refresh = createAsyncThunk('auth/refresh', async (_, { getState, rejectWithValue }) => {
  try {
    api.token(getState().auth.refreshToken);
    const { data } = await api.refresh({ sid: getState().auth.sid });
    api.token(data.newAccessToken);
    return data;
  } catch (error) {
    return rejectWithValue(Error.UNKNOWN);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await api.logout();
    api.token('');
  } catch (error) {
    return rejectWithValue(Error.UNKNOWN);
  }
});

export { register, login, refresh, logOut };
