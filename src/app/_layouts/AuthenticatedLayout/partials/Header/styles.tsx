import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
