import { Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import ExpensesPage from 'pages/ExpensesPage';
// import IncomePage from 'pages/IncomePage';
import IncomePage from '../pages/IncomePage';
// import ReportsPage from 'pages/ReportsPage';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthToken } from 'redux/auth/AuthSelectors';
import { getAuthUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAuthToken);

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="auth"
          element={
            <PublicRoute restricted>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="transactions"
          element={
            <PrivateRoute>
              {/*переименовать transactions */}
              <ExpensesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="transactions/:transType"
          element={
            <PrivateRoute>
              {/*переименовать transactions */}
              <ExpensesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="reports"
          element={
            <PrivateRoute>
              <IncomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="reports/:repotsType"
          element={
            <PrivateRoute>
              <IncomePage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
