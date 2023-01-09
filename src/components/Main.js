import React, { useReducer } from "react";

import BookingPage from "./BookingPage";
import Test from "./Test";
import {fetchAPI} from "../fetchAPI";



function fetchDateJSON(date) {
  return fetchAPI(date);
}

export const initializeTimes = () => {
  var today = new Date();
  const result = fetchDateJSON(today);
  //console.log(result);
  return result;
  //console.log(fetchDate(date).then((response) => response.json())
  //.then((data) => console.log(data)));
  //const response = await fetchDate(date);
  //const result = await response.json();
  //console.log(result);

  //return window["fetchAPI"](date);
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'date':
      console.log(action.payload.date)
      //return fetchDateJSON(action.payload.date);
      //const response =  fetchDateJSON(action.payload.date);
      //console.log(result);
      return state;
    default:
      throw new Error();
  }
};

const Main = ({ page }) => {
    // initialize the available times

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
      <main>
        {page === "main" && <Test></Test>}
        {page === "booking" && (
          <BookingPage times={availableTimes()} changeProps={dispatch}></BookingPage>
        )}
      </main>
    );
  };

export default Main;
