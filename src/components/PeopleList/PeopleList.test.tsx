import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { PeopleList, Props } from '../PeopleList';

describe('PeopleList', () => {
  const buildSubject = (props: Props) => render(<PeopleList {...props} />)

  describe('rendering', () => {
    const props = {
      people: [
        {
          id: '1',
          name: 'Ardelia Digan',
        },
      ],
    };

    it('renders a list of people', () => {
      const { getByText } = buildSubject(props);

      expect(getByText('Ardelia Digan')).toBeDefined();
    });
  });

  describe('searching', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    const props = {
      people: [
        {
          id: '1',
          name: 'Ardelia Digan',
          teamName: 'The Hackers',
        },
        {
          id: '2',
          name: 'Cello Inde',
          teamName: 'The Hustlers',
        },
      ],
    };

    it('filters a list of people by name', () => {
      const { queryByText, getByLabelText } = buildSubject(props);

      fireEvent.change(getByLabelText('Search'), {
        target: {
          value: 'Ardelia Digan'
        }
      });

      act(() => jest.runAllTimers());

      expect(queryByText('Ardelia Digan')).toBeInTheDocument();
      expect(queryByText('Cello Inde')).not.toBeInTheDocument();
    });

    it.todo('filters a list of people by teamName');
  });
});
