import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodTransactions } from 'utils/api';

export const getPeriod = createAsyncThunk(
  'transactions/getPeriodTransactions',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getPeriodTransactions(date);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
