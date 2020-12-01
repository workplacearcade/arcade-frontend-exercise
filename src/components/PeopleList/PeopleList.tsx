import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { Person } from '../../types';

import { PeopleListItem } from './PeopleListItem';

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


  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <Box>
      <Input
        aria-label="Search"
        marginY={4}
        onChange={handleChange}
        placeholder="Search people"
        variant="outline"
        value={searchValue}
      />

      {sortedPeople.map(person => (
        <PeopleListItem
          key={person.id}
          {...person}
        />
      ))}
    </Box>
  );
}
