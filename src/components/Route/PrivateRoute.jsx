import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from 'redux/auth/AuthSelectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getAuthToken);

  return isLoggedIn ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
