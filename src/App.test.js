import { fireEvent, render, screen } from '@testing-library/react';
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
    
    render(<BookingForm times={["17:00"]} changeProps={dispatch} submitForm={submitForm}></BookingForm>);
    const headingElement = screen.getByText(/Make your reservation/i);
    expect(headingElement).toBeInTheDocument();

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: '17:00' } });

    const occasion = screen.getByLabelText("Occasion");
    fireEvent.change(occasion, { target: { value: 'birthday' } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitForm).toBeCalledTimes(1);

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