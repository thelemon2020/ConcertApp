import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Home } from './Home';

it('can handle a submit from concert form', () => {
  render(<Home/>);

  const headliningAct = 'Taylor Swift'
  const headliningInput = screen.getByRole('textbox', {name: 'Headlining Acts'});
  userEvent.type(headliningInput, `${headliningAct}{enter}`);

  const supportingAct = 'Backstreet Boys'
  const supportingInput = screen.getByRole('textbox', {name: 'Supporting Acts'});
  userEvent.type(supportingInput, `${supportingAct}{enter}`);

  const date = '05/11/2022'
  const dateInput = screen.getByLabelText('Concert Date');
  userEvent.type(dateInput, `${date}`);

  const venue = 'Toronto';
  const venueInput = screen.getByRole('textbox', {name: 'Venue'});
  userEvent.type(venueInput, `${venue}`);

  // TODO: implement adding a concert card to the screen when you submit
  const concertCard = screen.getByTestId('concert-card');
  expect(concertCard).toBeInTheDocument();
  expect(within(concertCard).getByText(headliningAct)).tobeInTheDocument();
  expect(within(concertCard).getByText(supportingAct)).tobeInTheDocument();
  expect(within(concertCard).getByText(date)).tobeInTheDocument();
  expect(within(concertCard).getByText(venue)).tobeInTheDocument();
});