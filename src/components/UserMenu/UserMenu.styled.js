import styled from 'styled-components';

export const UserMenuBox = styled.div`
  width: 70%;
  padding: 20px 0;
  text-align: center;
`;

export const UserMenuButton = styled.button`
  width: 200px;
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
