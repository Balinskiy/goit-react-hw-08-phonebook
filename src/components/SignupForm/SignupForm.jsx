import React, { useState } from 'react';
import {
  SignUpBox,
  SignUpButton,
  SignUpFormStyled,
  SignUpInput,
} from './SignupForm.styled';
import { Heading } from 'components/Heading/Heading.styled';
import { registerThunk } from 'store/auth/operations';
import { useDispatch } from 'react-redux';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(registerThunk({ name, email, password }));
  };

  return (
    <SignUpBox>
      <Heading as="h1" styletype="primary">
        Registration Form
      </Heading>
      <SignUpFormStyled onSubmit={handleSubmit}>
        <SignUpInput
          value={name}
          onChange={onChangeInput}
          type="text"
          name="name"
          required
          placeholder="Your Name*"
        />
        <SignUpInput
          value={email}
          onChange={onChangeInput}
          type="email"
          name="email"
          required
          placeholder="Your E-mail*"
        />

        <SignUpInput
          value={password}
          onChange={onChangeInput}
          type="password"
          name="password"
          required
          placeholder="Your password*"
        />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </SignUpFormStyled>
    </SignUpBox>
  );
};

export default SignUpForm;
