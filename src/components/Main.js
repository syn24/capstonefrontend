import React, { useReducer } from "react";

import BookingPage from "./BookingPage";
import Test from "./Test";

export const initializeTimes = () => {
  return [
    { label: "17:00", value: "17" },
    { label: "18:00", value: "18" },
    { label: "19:00", value: "19" },
    { label: "20:00", value: "20" },
    { label: "21:00", value: "21" },
    { label: "22:00", value: "22" },
  ];
}

export const updateTimes = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'date':
      console.log(action.payload)
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
