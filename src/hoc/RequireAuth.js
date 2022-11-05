import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children, isUserAuth }) {
  const location = useLocation();

  if (!isUserAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
