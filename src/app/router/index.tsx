import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../providers/auth-provider";
import { LoginView } from "../views/Auth/Login";
import { HomeView } from "../views/Home";
import { AuthenticatedLayout } from "../_layouts/AuthenticatedLayout";

export const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route index element={<LoginView />}></Route>
          </Route>
          <Route path="/" element={<AuthenticatedLayout />}>
            <Route index element={<HomeView />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
