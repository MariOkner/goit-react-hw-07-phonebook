import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {
  Container,
  PhonebookIcon,
  TitlePhonebook,
  TitleContacts,
} from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.warn(error);
    }
  }, [error]);

  return (
    <Container>
      <TitlePhonebook title="Phonebook">
        <PhonebookIcon />
        Phonebook
      </TitlePhonebook>
      {isLoading && <Loader />}
      <ContactForm />

      <TitleContacts title="Contacts">Contacts</TitleContacts>
      {contacts.length === 0 ? null : <Filter />}
      {contacts.length === 0 ? null : <ContactList />}
      <ToastContainer />
    </Container>
  );
};
