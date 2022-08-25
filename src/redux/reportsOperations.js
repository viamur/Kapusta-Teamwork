import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactionIncomeApi,
  getTransactionExpenseApi,
} from '../utils/api';

export const getIncomeTransactionReport = createAsyncThunk(
  'transaction/income',
  async (tansactionInfo, { rejectWithValue }) => {
    try {
      const incomeTransactionReport = await getTransactionIncomeApi(
        tansactionInfo
      );
      return incomeTransactionReport;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseTransactionReport = createAsyncThunk(
  'transaction/expense',
  async (tansactionInfo, { rejectWithValue }) => {
    try {
      const expenseTransactionReport = await getTransactionExpenseApi(
        tansactionInfo
      );
      return expenseTransactionReport;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
