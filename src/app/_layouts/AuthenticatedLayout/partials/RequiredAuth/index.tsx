import { Navigate, useLocation } from "react-router-dom";
import { ReactFCWithChildren } from "../../../../../react";
import { useAuth } from "../../../../_hooks/useAuth";

export const RequireAuth: ReactFCWithChildren = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <> {auth} -{children}</>;
};
