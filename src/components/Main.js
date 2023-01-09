import React, { useReducer } from "react";

import BookingPage from "components/BookingForm";
import ConfirmedBooking from "components/ConfirmedBooking";
import Test from "./Test";
import {fetchAPI, submitAPI} from "../fetchAPI";
import { useNavigate } from "react-router-dom";




function fetchDateJSON(date) {
  return fetchAPI(date);
}

export const initializeTimes = () => {
  var today = new Date();
  const result = fetchDateJSON(today);
  //console.log(result);
  return result;
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'date':
      return state;
    default:
      throw new Error();
  }
};



const Main = ({ page }) => {
    // initialize the available times

    const navigate = useNavigate();

    const submitForm = (formData) => {
      const isSuccessful = submitAPI(formData);
      console.log(formData);
      if (isSuccessful) {
        navigate("/confirmed", formData);
      }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
      <main>
        {page === "main" && <Test></Test>}
        {page === "booking" && (
          <BookingPage times={availableTimes()} changeProps={dispatch} submitForm={submitForm}></BookingPage>
        )}
        {page === "confirmed" && (<ConfirmedBooking />) }
      </main>
    );
  };

export default Main;
