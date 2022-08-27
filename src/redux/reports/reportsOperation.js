import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodTransactions } from 'utils/api';

export const getPeriod = createAsyncThunk(
  'reports/getPeriodTransactions',
  async (date, { rejectWithValue }) => {
    console.log('gdgdhfh', date);
    try {
      const { data } = await getPeriodTransactions(date);
      console.log('dhfh', data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
