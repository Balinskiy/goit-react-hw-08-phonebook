import React from 'react';
import { Navbox, Navwrap, StyledNavLink } from './Navigation.styled';

import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'store/auth/selectors';

import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <Navbox>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Navwrap>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
          <StyledNavLink to="/login">Log In</StyledNavLink>
        </Navwrap>
      )}
    </Navbox>
  );
};

export default Navigation;
