import { Ul,Li, P, Button } from './RenderContactList.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operation';
import { getContacts } from 'redux/selectors';

export const RenderContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts) ;
  // const filterList = useSelector(state => state.filter);
  console.log(contacts);
  return (
    <>
      <Ul>
        {/* contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase())) */}
        {contacts.map(({ id, name, number }) => (
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
