import React, { useState }  from 'react';
import { Box, Input } from '@chakra-ui/react';

import { Person } from '../../types';

import { PeopleListItem } from './PeopleListItem';
import { PeopleListSearch } from './PeopleListSearch';

export interface Props {
  people: Person[];
}

export function PeopleList({
  people,
}: Props) {
  const [searchValue, setSearchValue] = useState('');

  const filteredPeople = searchValue
    ? people.filter((person) => person.name.toLowerCase().includes(searchValue.toLowerCase()))
    : people;

  const sortedPeople = filteredPeople.sort((personA, personB) => {
    if (personA.name === personB.name) {
      return 0;
    }

    return personA.name > personB.name ? 1 : -1;
  });


  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <Box>
      <PeopleListSearch
        onSearch={handleSearch}
      />

      {sortedPeople.map(person => (
        <PeopleListItem
          {...person}
        />
      ))}
    </Box>
  );
}
