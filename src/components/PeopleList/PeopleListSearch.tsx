import React, { useCallback, useState } from 'react';
import { Input } from '@chakra-ui/react';

import { debounce } from '../../utils/debounce';

export interface Props {
  onSearch: (value: string) => void;
}

const DEBOUNCE_MS = 300;

export function PeopleListSearch({
  onSearch,
}: Props) {
  const [searchValue, setSearchValue] = useState('');

  const debouncedOnChange = useCallback(debounce((value) => {
    console.log('debouncing');
    onSearch(value);
  }, DEBOUNCE_MS), [onSearch]);

  function handleChange(event) {
    setSearchValue(event.target.value);
    debouncedOnChange(event.target.value);
  }

  return (
    <Input
      aria-label="Search"
      marginY={4}
      onChange={handleChange}
      placeholder="Search people"
      variant="outline"
      value={searchValue}
    />
  );
}
