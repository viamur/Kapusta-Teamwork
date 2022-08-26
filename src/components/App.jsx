import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';

import AuthPage from '../pages/AuthPage/AuthPage';
import { getAuthToken } from 'redux/auth/AuthSelectors';
import { getAuthUser } from 'redux/auth/authOperations';
import TransactionsPage from '../pages/TransactionsPage/TransactionsPage';
import ReportsPage from '../pages/ReportsPage/ReportsPage';

//  const [forModal, setForModal] = useState({});

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
              <TransactionsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="transactions/:transType"
          element={
            <PrivateRoute>
              <TransactionsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="reports"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="reports/:repotsType"
          element={
            <PrivateRoute>
              <ReportsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="reports"
          element={
            <PublicRoute restricted>
              <ReportsPage />
            </PublicRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
