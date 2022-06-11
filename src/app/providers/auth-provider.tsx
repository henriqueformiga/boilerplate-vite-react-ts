import { useState } from "react";
import { ReactFCWithChildren } from "../../react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthService } from "../_services/auth.service";

export const AuthProvider: ReactFCWithChildren = ({ children }) => {
  const authService = new AuthService();
  let [user, setUser] = useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return authService.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authService.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
