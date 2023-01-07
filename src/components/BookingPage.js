import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({times, changeProps}) => {
  return (
   
      <main>
       <BookingForm times={times} changeProps={changeProps}/>
      </main>
  );
};

export default BookingPage;