import { Ul,Li, P, Button } from './RenderContactList.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import {selectContacts, selectFilter } from 'redux/selectors';

export const RenderContactList = () => {
  const dispatch = useDispatch();
  const contacts =  useSelector(selectContacts);
  const filterList = useSelector(selectFilter);
 
  return (
    <>
      <Ul>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase())).map(({ id, name, number }) => (
          <Li key={id}>
            <P>
             &#9742; &#160;{name}: {number}
            </P>
            <Button onClick={() =>  dispatch(deleteContact(id))}>Delete</Button>
          </Li>
        ))}
      </Ul>
    </>
  );
};