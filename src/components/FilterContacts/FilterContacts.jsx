

import { P, Input } from './FilterContacts.styled'
import { useSelector, useDispatch } from "react-redux";
import { inputFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const FilterContacts= () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = evt => {
     dispatch(inputFilter(evt.currentTarget.value.toLowerCase()))
   }
    
    return (
      <>
        <P>Find contacts by name</P>
        <Input
          value={filter}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </>
    );
}
