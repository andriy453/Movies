import styled from 'styled-components';
// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgb(159, 159, 159);
  font-weight: 500;
    transition: all 300ms;
  &.active {
    color: white;
  }
    
  &:hover{
    color: white;
  }
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
  box-shadow: 0px 0px 5px 1px rgba(34, 60, 80, 0.19);
`;
export const NavList = styled.ul`
  justify-content: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  gap: 18px;
  padding: 14px;
 background-color: black;
`;

export const NavItem = styled.li`
  a:hover,
  a:focus {
    transform: scale(1.6);
  }
`;
