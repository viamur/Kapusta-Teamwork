import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

/* ==============ADD INCOME ================ */
export const addIncomeThunk = createAsyncThunk(
  'transaction/addIncome',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await api.addIncome(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============ADD EXPENSE ================ */
export const addExpenseThunk = createAsyncThunk(
  'transaction/addExpense',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await api.addExpense(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============GET EXPENSE ================ */
export const getExpenseThunk = createAsyncThunk(
  'transaction/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getExpense();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============GET INCOME ================ */
export const getIncomeThunk = createAsyncThunk(
  'transaction/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getIncome();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============DELETE TRANSACTION ================ */
export const removeTransactionThunk = createAsyncThunk(
  'transaction/remove',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.removeTransaction(id);
      return { ...data, id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============INCOME CATEGORIES================ */
export const incomeCategoriesThunk = createAsyncThunk(
  'transaction/incomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getIncomeCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* ==============EXPENSE CATEGORIES================ */
export const expenseCategoriesThunk = createAsyncThunk(
  'transaction/expenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getExpenseCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
