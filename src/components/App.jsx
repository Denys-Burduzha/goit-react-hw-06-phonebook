import { useSelector } from 'react-redux';
import { Container } from './Container/Container';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import { getContacts } from 'redux/contactsSlice';
import  NoContactsMessage  from './NoContactsMessage/NoContactsMessage';


export function App() {
  const contacts = useSelector(getContacts);
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter />
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <NoContactsMessage />
        )}
      </Container>
    );
}