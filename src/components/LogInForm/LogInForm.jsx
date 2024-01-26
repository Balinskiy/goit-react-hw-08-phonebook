import React, { useState } from 'react';
import {
  LogInBox,
  LogInButton,
  LogInFormStyled,
  LogInInput,
} from './LogInForm.styled';
import { Heading } from 'components/Heading/Heading.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/auth/operations';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(loginThunk({ email, password }));
  };

  return (
    <LogInBox>
      <Heading as="h1" styletype="primary">
        Login Form
      </Heading>
      <LogInFormStyled onSubmit={handleSubmit}>
        <LogInInput
          value={email}
          onChange={onChangeInput}
          type="email"
          name="email"
          required
          placeholder="Your E-mail*"
        />

        <LogInInput
          value={password}
          onChange={onChangeInput}
          type="password"
          name="password"
          required
          placeholder="Your password*"
        />
        <LogInButton type="submit">Sign Up</LogInButton>
      </LogInFormStyled>
    </LogInBox>
  );
};

export default LogInForm;
