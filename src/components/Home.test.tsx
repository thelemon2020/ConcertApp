import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Home } from './Home';

it('can handle a submit from concert form', () => {
  render(<Home/>);

  userEvent.click(screen.getByRole('button', {name: 'Add Concert'}));

  const modal = screen.getByText('Add Concert');
  expect(modal).toBeVisible();

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

  expect(modal).not.toBeVisible();

  const concertBullet =  screen.getByRole('button', {name: /Show Concert Details/});
  expect(concertBullet).toBeInTheDocument();
});

