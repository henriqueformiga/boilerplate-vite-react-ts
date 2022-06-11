import { ReactFCWithChildren } from "../../../react";
import { HeaderLayout } from "./partials/Header";
import { RequireAuth } from "./partials/RequiredAuth";

export const AuthenticatedLayout: ReactFCWithChildren = ({ children }) => {
  return (
    <RequireAuth>
      <HeaderLayout />

      {children}
    </RequireAuth>
  );
};
