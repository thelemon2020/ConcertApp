import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Concert } from './ConcertForm';
import Timeline from './Timeline';


const firstBand = 'some new band';
const secoundBand = 'some old band';

const concerts: Concert[] = [
  {
    headliningActs: [secoundBand],
    supportingActs: ['someotherband'],
    date: '12/12/2021',
    venue: 'some venue',
    id: '1234'
  },
   {
    headliningActs: [firstBand],
    supportingActs: ['someotherband'],
    date: '11/12/2021',
    venue: 'some venue',
    id: '5678'
  }
]

it('can display concerts in correct order', () => {
  render(<Timeline concerts={concerts}></Timeline>)

  const bullets = screen.getAllByRole('button', {name: /Show Concert Details/});

  [firstBand, secoundBand].forEach((bandHeadingAct, index) => {
    userEvent.click(bullets[index]);

    expect(screen.getByText(bandHeadingAct)).toBeInTheDocument();

    userEvent.click(bullets[index]);
  })
});

// TODO: fix this test
it('can click on timeline bullet to open a detailed view', () => {
  render(<Timeline concerts={[concerts[0]]}></Timeline>)

  expect(screen.queryByRole('dialog', {name:/Concert info for/})).not.toBeInTheDocument();

  const concertBullet =  screen.getByRole('button', {name: /Show Concert Details/});

  userEvent.click(concertBullet);

  expect(screen.getByRole('dialog', {name:/Concert info for/})).toBeInTheDocument();
})
