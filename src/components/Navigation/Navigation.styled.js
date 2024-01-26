import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbox = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  font-size: 20px;
  color: #010101;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid;
  border-image: linear-gradient(90deg, #1d52ed, #e9087a) 50% 0;
`;

export const Navwrap = styled.div`
  display: flex;
  gap: 30px;
`;

export const Hiname = styled.p`
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;

  &.active {
    font-weight: bold;
    color: #ff4500;
  }
`;
