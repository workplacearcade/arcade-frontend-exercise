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

  const handleDebouncedSearch = useCallback(debounce(onSearch, DEBOUNCE_MS), [onSearch]);

  function handleChange(event) {
    setSearchValue(event.target.value);
    handleDebouncedSearch(event.target.value);
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
