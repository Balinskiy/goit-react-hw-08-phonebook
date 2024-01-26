import React from 'react';
import { UserMenuBox, UserMenuButton } from './UserMenu.styled';

import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'store/auth/selectors';
import { logoutThunk } from 'store/auth/operations';

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <UserMenuBox>
        <p>{user.name}</p>
        <UserMenuButton type="submit" onClick={handleLogOut}>
          Logout
        </UserMenuButton>
      </UserMenuBox>
    </>
  );
};

export default UserMenu;
