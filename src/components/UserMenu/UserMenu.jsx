import React from 'react';
import { UserMenuBox, UserMenuButton } from './UserMenu.styled';
import { Heading } from 'components/Heading/Heading.styled';

const UserMenu = () => {
  return (
    <>
      <UserMenuBox>
        <Heading as="h1" styletype="primary">
          Log Out
        </Heading>
        <p>mango@mail.com</p>
        <UserMenuButton type="submit">Logout</UserMenuButton>
      </UserMenuBox>
    </>
  );
};

export default UserMenu;
