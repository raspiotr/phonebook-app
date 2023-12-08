import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import css from './Contacts.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from '../../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.ContentBox}>
      <Helmet>
        <title>Your Phonebook</title>
      </Helmet>

      <h2>Add contacts to your Phonebook</h2>
      <ContactForm />

      {contacts.length !== 0 ? (
        <>
          <h2>Your contacts</h2>
          <Filter />
          {isLoading && !error && (
            <div className={css.InProgress}>
              <b>Request in progress...</b>
              <Loader />
            </div>
          )}
          <ContactList />
        </>
      ) : (
        <>
          <h2>Your Phonebook is empty</h2>
          <h3>Add some contacts above</h3>
        </>
      )}
    </div>
  );
}
