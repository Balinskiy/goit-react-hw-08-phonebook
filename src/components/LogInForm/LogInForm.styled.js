import styled from 'styled-components';

export const LogInBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInFormStyled = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInInput = styled.input`
  width: 500px;
  font-size: 18px;
  margin: 10px 5px;
`;

export const LogInButton = styled.button`
  width: 200px;
  height: 30px;
  font-size: 16px;
  margin-right: 10px;
  background: linear-gradient(90deg, #1f6b08, #f1e104);
  color: white;
  margin: 10px 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #2e6d31;
  }
`;
