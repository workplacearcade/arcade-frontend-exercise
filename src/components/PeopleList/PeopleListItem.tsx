import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Person } from '../../types';

export type Props = Pick<Person, 'name' | 'teamName'>;

export function PeopleListItem({
  name,
  teamName,
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingY={4}
    >
      <Box marginLeft={2}>
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{teamName}</Text>
      </Box>
    </Box>
  );
}
