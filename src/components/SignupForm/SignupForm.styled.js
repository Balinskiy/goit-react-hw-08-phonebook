import styled from 'styled-components';

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpFormStyled = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpInput = styled.input`
  width: 500px;
  font-size: 18px;
  margin: 10px 5px;
`;

export const SignUpButton = styled.button`
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

// export const SignUpButton = styled.button`
//   width: 200px;
//   height: 30px;
//   font-size: 16px;
//   margin-right: 10px;
//   background-color: linear-gradient(90deg, #1d52ed, #e9087a) 50% 0;
//   /* background-color: #4caf50; */
//   color: white;
//   margin: 10px 5px;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #2e6d31;
//   }
// `;
