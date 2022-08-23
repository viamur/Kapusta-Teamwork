import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, restricted = false }) => {
    const isLoggedIn = true;
    
  return isLoggedIn && restricted ? children : <Navigate to="/" />;
};

export default PrivateRoute;
