import React from 'react';
import { Hiname, Navbox, Navwrap } from './Navigation.styled';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'store/auth/selectors';
import { logout } from 'store/auth/authSlice';
import { logoutThunk } from 'store/auth/operations';

const Navigation = () => {
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    navigate('/login');
    dispatch(logout());
    logoutThunk();
  };

  return (
    <Navbox>
      <NavLink to="/">Home</NavLink>
      {user ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <NavLink to="/contacts">Contacts</NavLink>
      )}
      <Navwrap>
        {!user && <NavLink to="/signup">Sign Up</NavLink>}
        {user && <Hiname>Hi, {user.name}</Hiname>}
        {user ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </Navwrap>
    </Navbox>
  );
};

export default Navigation;
