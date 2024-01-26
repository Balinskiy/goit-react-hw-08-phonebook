import { Box } from 'components/App/App.styled';
import LogInForm from 'components/LogInForm/LogInForm';

import React from 'react';
import { useSelector } from 'react-redux';
import { isLoggedInSelector, userSelector } from 'store/auth/selectors';

const LogIn = () => {
  const user = useSelector(userSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <Box>
      {!isLoggedIn ? (
        <LogInForm />
      ) : (
        <p>Hi, {user.name}! Let's go to Contact list </p>
      )}
    </Box>
  );
};

export default LogIn;
