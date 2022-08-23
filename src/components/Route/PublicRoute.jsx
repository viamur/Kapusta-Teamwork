import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = false;

  return isLoggedIn && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
