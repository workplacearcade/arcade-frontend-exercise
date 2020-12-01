import React from 'react';
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { PeopleList } from '../components/PeopleList';

import people from '../people-mock';

const TITLE = 'Arcade Frontend Exercise';

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Box
        maxWidth={440}
        margin="0 auto"
        paddingX={8}
        paddingY={6}
      >
        <Text
          as="h1"
          fontSize="4xl"
          textAlign="center"
          fontWeight="thin"
          marginBottom={4}
        >
          {TITLE}
        </Text>
        <PeopleList people={people} />
      </Box>
    </ChakraProvider>
  )
}
