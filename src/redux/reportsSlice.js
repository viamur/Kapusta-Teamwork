import { createSlice } from '@reduxjs/toolkit';
import {
  getIncomeTransactionReport,
  getExpenseTransactionReport,
} from './reportsOperations.js';

const transactionsReportSlice = createSlice({
  name: 'transaction',
  initialState: {
    expense: {},
    income: {},
  },
  reducers: {},
  extraReducers: {
    [getIncomeTransactionReport.fulfilled]: (state, { payload }) => {
      state.expense = { ...payload.reportOfMonth };
    },
    [getExpenseTransactionReport.fulfilled]: (state, { payload }) => {
      state.income = { ...payload.reportOfMonth };
    },
  },
});
export default transactionsReportSlice.reducer;
