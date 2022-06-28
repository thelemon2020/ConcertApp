import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Concert } from './ConcertForm';
import Timeline from './Timeline';


const concerts: Concert[] = [
  {
    headliningActs: ['someband'],
    supportingActs: ['someotherband'],
    date: '12/12/2021',
    venue: 'some venue',
    id: '1234'
  },
   {
    headliningActs: ['someband'],
    supportingActs: ['someotherband'],
    date: '11/12/2021',
    venue: 'some venue',
    id: '5678'
  }
]

it('can display concerts in correct order', () => {
  render(<Timeline concerts={concerts}></Timeline>)

  const bullets = screen.getAllByTestId(/icon/);

  expect(bullets[0]).toHaveAttribute('data-testId', 'icon-5678')
  expect(bullets[1]).toHaveAttribute('data-testId', 'icon-1234')
});

