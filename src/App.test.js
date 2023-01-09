import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import React from 'react';
import availableTimes from 'components/availableTimes';
import {initializeTimes, updateTimes} from 'components/Main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reservation/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the BookingForm heading', () => {

    const dispatch = jest.fn();
    const submitForm = jest.fn(() => {
      return 'hello';
    });
    
    render(<BookingForm times={[]} changeProps={dispatch} submitForm={submitForm}></BookingForm>);
    const headingElement = screen.getByText(/Make your reservation/i);
    expect(headingElement).toBeInTheDocument();
})

test('Run the availableTimes function', () => {

  const times = initializeTimes();

  expect(times.length).not.toEqual(0);
  
})

test('Run the updateTimes function', () => {

  const update = {date: "2023-01-12"};
  const result = updateTimes({date: "2023-01-12"},{type: 'date'} );

  expect(result).toEqual(update);
  
})