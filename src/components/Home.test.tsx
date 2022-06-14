import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Home } from './Home';

it('can handle a submit from concert form', () => {
  render(<Home/>);
  userEvent.click(screen.getByText('Open Modal'));
  const headliningAct = 'Taylor Swift'
  const headliningInput = screen.getByRole('textbox', {name: 'Headlining Acts'});
  userEvent.type(headliningInput, `${headliningAct}{enter}`);

  const supportingAct = 'Backstreet Boys'
  const supportingInput = screen.getByRole('textbox', {name: 'Supporting Acts'});
  userEvent.type(supportingInput, `${supportingAct}{enter}`);

  const date = '2022-05-11'
  const dateInput = screen.getByLabelText('Concert Date');
  userEvent.type(dateInput, `${date}`);

  const venue = 'Toronto';
  const venueInput = screen.getByRole('textbox', {name: 'Venue'});
  userEvent.type(venueInput, `${venue}`);

  userEvent.click(screen.getByText('Submit'));

  const concertCard = screen.getByTestId('concert-card');
  expect(concertCard).toBeInTheDocument();
  
  expect(within(concertCard).getByText(headliningAct)).toBeInTheDocument();
  expect(within(concertCard).getByText(supportingAct)).toBeInTheDocument();
  expect(within(concertCard).getByText(date)).toBeInTheDocument();
  expect(within(concertCard).getByText(venue)).toBeInTheDocument();
});