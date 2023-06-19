import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import { Div, Title, ContactsTitle } from './App.styled';
import {ToastContainer} from 'react-toastify';
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operation";
import { getContacts, getError, getIsLoading } from "redux/selectors";


export const App = () => {
  const isLoading = useSelector(getIsLoading); 
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const contacts = useSelector(state => state.contacts.contacts);
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
 

  return (
      <Div>
        <Title> Phonebook</Title>
        <FormAddContacts  />
        <ContactsTitle>Contacts</ContactsTitle>

      {isLoading && !error && <h2>Loading ... </h2>} 
        {contacts.length !== 0 && <FilterContacts />}
      
        <RenderContactList />  
      
        <ToastContainer/>
      </Div>
  );
}
