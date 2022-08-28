import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseThunk,
  addIncomeThunk,
  expenseCategoriesThunk,
  getExpenseThunk,
  getIncomeThunk,
  incomeCategoriesThunk,
  removeTransactionThunk,
} from './transactionsOperations';

const initialState = {
  balance: null,
  expenses: null,
  incomes: null,
  monthsExpenses: null,
  monthsIncomes: null,
  expenseCategories: null,
  incomeCategories: null,
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateBalance(state, { payload }) {
      return { ...state, balance: payload };
    },
  },
  extraReducers: {
    /* ==============ADD INCOME ================ */
    [addIncomeThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addIncomeThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.newBalance;
      state.incomes = [...state.incomes, { ...payload.transaction, expense: false }];
      state.isLoading = false;
    },
    [addIncomeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============ADD EXPENSE ================ */
    [addExpenseThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addExpenseThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.newBalance;
      state.expenses = [...state.incomes, { ...payload.transaction, expense: true }];
      state.isLoading = false;
    },
    [addExpenseThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============GET EXPENSE ================ */
    [getExpenseThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [getExpenseThunk.fulfilled]: (state, { payload }) => {
      state.expenses = payload.expenses.map(el => ({ ...el, expense: true }));
      state.monthsExpenses = payload.monthsStats;
      state.isLoading = false;
    },
    [getExpenseThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============GET INCOME ================ */
    [getIncomeThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [getIncomeThunk.fulfilled]: (state, { payload }) => {
      state.incomes = payload.incomes.map(el => ({ ...el, expense: false }));
      state.monthsIncomes = payload.monthsStats;
      state.isLoading = false;
    },
    [getIncomeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============DELETE TRANSACTION ================ */
    [removeTransactionThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeTransactionThunk.fulfilled]: (state, { payload }) => {
      state.balance = payload.newBalance;
      state.expenses = state.expenses.filter(el => el['_id'] !== payload.id);
      state.incomes = state.incomes.filter(el => el['_id'] !== payload.id);
      state.isLoading = false;
    },
    [removeTransactionThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============INCOME CATEGORIES================ */
    [incomeCategoriesThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [incomeCategoriesThunk.fulfilled]: (state, { payload }) => {
      state.incomeCategories = payload;
      state.isLoading = false;
    },
    [incomeCategoriesThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ==============EXPENSE CATEGORIES================ */
    [expenseCategoriesThunk.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [expenseCategoriesThunk.fulfilled]: (state, { payload }) => {
      state.expenseCategories = payload;
      state.isLoading = false;
    },
    [expenseCategoriesThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
export const { updateBalance } = transactionsSlice.actions;
