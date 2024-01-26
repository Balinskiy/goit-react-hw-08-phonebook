import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const UserMenuButton = styled.button`
  width: 130px;
  height: 30px;
  font-size: 16px;
  margin-right: 10px;
  background: linear-gradient(90deg, #1d52ed, #e9087a);
  color: white;
  margin: 10px 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #2e6d31;
  }
`;
