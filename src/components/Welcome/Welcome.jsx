import React from 'react';
import { Welcomebox } from './Welcome.styled';
import { Heading } from 'components/Heading/Heading.styled';

const Welcome = () => {
  return (
    <>
      <Welcomebox>
        <Heading as="h1" styletype="primary">
          Welcome
        </Heading>
        <p>Now all your contacts will be here!</p>
        <p>Please, Sign up or Log in to have access to the Contactbook!</p>
      </Welcomebox>
    </>
  );
};

export default Welcome;
