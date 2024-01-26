import { Box } from 'components/App/App.styled';
import ContactFormComponent from 'components/ContactForm/ContactForm';
import ContactListComponent from 'components/ContactList/ContactList';
import FilterComponent from 'components/Filter/Filter';
import { Heading } from 'components/Heading/Heading.styled';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';
import { getContacts } from 'store/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const { error, isLoading } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <Heading as="h1" styletype="primary">
        Phonebook
      </Heading>
      <ContactFormComponent />

      <Heading as="h2" styletype="secondary">
        Contacts
      </Heading>
      <Heading as="h3" styletype="third">
        Find contact name by number:
      </Heading>

      <FilterComponent />
      {contacts.length > 0 && <ContactListComponent />}
    </Box>
  );
};

export default Contacts;
