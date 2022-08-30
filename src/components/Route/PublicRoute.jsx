import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from 'redux/auth/AuthSelectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getAuthToken);

  return isLoggedIn && restricted ? <Navigate to="/transactions" /> : children;
};

export default PublicRoute;
