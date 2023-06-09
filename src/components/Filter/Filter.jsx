import { useDispatch, useSelector } from 'react-redux';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

import { setFilter } from 'redux/contacts/filtersSlice';
import { selectStatusFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <FormControl id="filter" m="4" w={400}>
      <FormLabel>Search list:</FormLabel>
      <Input
        type="search"
        name="filter"
        value={useSelector(selectStatusFilter)}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default Filter;
