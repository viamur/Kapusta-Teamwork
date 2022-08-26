// import { createLogger } from 'redux-logger';
import authReducer from './auth/AuthSlice';
import reportsReducer from '../redux/reports/reportsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transactionsSlice from './transactions/transactionsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['sid', 'refreshToken', 'accessToken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  reports: reportsReducer,
  transactions: transactionsSlice,
});

// const logger = createLogger({
//   collapsed: (getState, action, logEntry) => !logEntry.error,
//   timestamp: false,
// });

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
