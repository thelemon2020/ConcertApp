import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConcertForm from './ConcertForm';
import userEvent from '@testing-library/user-event';

it('can add a headlining act', () => {
  render(<ConcertForm addConcert={() => { /** */}} />);

  const act = 'Taylor Swift'
  const input = screen.getByRole('textbox', {name: 'Headlining Acts'});
  userEvent.type(input, `${act}{enter}`);

  expect(input).toHaveValue('')
  expect(screen.getByText(act)).toBeInTheDocument();
});

it('can remove a headlining act', () => {
  render(<ConcertForm addConcert={() => { /** */}} />);

  const act = 'Taylor Swift'
  const input = screen.getByRole('textbox', {name: 'Headlining Acts'});
  userEvent.type(input, `${act}{enter}`);

  const removeButton = screen.getByRole('button', {name: 'X'});
  fireEvent.click(removeButton);

  expect(screen.queryByText(act)).not.toBeInTheDocument();
})

it('can add a supporting act', () => {
  render(<ConcertForm addConcert={() => { /** */}} />);

  const act = 'Backstreet Boys'
  const input = screen.getByRole('textbox', {name: 'Supporting Acts'});
  userEvent.type(input, `${act}{enter}`);

  expect(input).toHaveValue('')
  expect(screen.getByText(act)).toBeInTheDocument();
});


it('can remove a supporting act', () => {
  render(<ConcertForm addConcert={() => { /** */}} />);

  const act = 'Backstreet Boys'
  const input = screen.getByRole('textbox', {name: 'Supporting Acts'});
  userEvent.type(input, `${act}{enter}`);

  const removeButton = screen.getByRole('button', {name: 'X'});
  fireEvent.click(removeButton);

  expect(screen.queryByText(act)).not.toBeInTheDocument();
})