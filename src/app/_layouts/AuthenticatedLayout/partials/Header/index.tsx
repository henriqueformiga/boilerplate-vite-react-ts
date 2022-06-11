import React from "react";
import { Header, LogoNavLink } from "./styles";
export const HeaderLayout: React.FC = () => {
  return (
    <Header>
      <LogoNavLink to="/">Your</LogoNavLink>
    </Header>
  );
};
