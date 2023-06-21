import { FormAddContacts } from "./FormAddContacts";
import { FilterContacts } from './FilterContacts';
import { RenderContactList } from './RenderContactList';
import { Div, Title, ContactsTitle } from './App.styled';
import {ToastContainer} from 'react-toastify';
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError,  selectIsLoading } from "redux/selectors";
import Loader from "./Loader/Loader";

export const App = () => {
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
   return (
      <Div>
        <Title> Phonebook</Title>
        <FormAddContacts />
        <ContactsTitle>Contacts</ContactsTitle>

      {isLoading && !error && <Loader />} 
        {contacts.length !== 0 && <FilterContacts />}
      
        <RenderContactList />  
      
        <ToastContainer/>
      </Div>
  );
}
