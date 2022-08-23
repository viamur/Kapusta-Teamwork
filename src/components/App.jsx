import { Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';
import ExpensesPage from 'pages/ExpensesPage';
import IncomePage from 'pages/IncomePage';
import ReportsPage from 'pages/ReportsPage';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';




export const App = () => {
  return (
    

     <Routes>
        <Route path="/" element={''}>
          <Route
            index
            path="auth"
            element={
              <PublicRoute restricted>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="expenses"
            element={
              <PublicRoute restricted>
                <ExpensesPage/>
              </PublicRoute>
            }
          />
          <Route
            path="incomes"
            element={
              <PublicRoute restricted>
                <IncomePage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

   
  );
};
