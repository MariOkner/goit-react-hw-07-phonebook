import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import {
  ContactListHTML,
  ContactItemHTML,
  ContactDeleteHTML,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ContactListHTML>
      {contacts.map(({ id, name, number }) => (
        <ContactItemHTML key={id}>
          {name}: {number}
          <ContactDeleteHTML
            id={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactDeleteHTML>
        </ContactItemHTML>
      ))}
    </ContactListHTML>
  );
};
