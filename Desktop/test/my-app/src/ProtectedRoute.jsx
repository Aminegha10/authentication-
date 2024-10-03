import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, isLogedin }) => {
  if (isLogedin) return children;
  else return <Navigate to="/" />;
};

export default ProtectedRoute;
