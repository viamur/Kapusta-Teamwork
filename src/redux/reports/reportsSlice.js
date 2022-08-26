import { createSlice } from '@reduxjs/toolkit';
import { getPeriod } from '../../utils/reportsApi';

const initialState = {
  data: {},
  error: null,
  isLoading: false,
};

const reports = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [getPeriod.pending]: (state, _) => ({
      ...state,

      isLoading: true,
    }),
    [getPeriod.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
      error: null,
      isLoading: false,
    }),
    [getPeriod.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default reports.reducer;
