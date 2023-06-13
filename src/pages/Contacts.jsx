import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      
        <h1>Phonebook</h1>
      
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {isLoading ? null : <Filter />}
      <ContactList />
    </div>
  );
};

export default App;
