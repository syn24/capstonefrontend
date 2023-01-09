import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({times, changeProps, submitForm}) => {
  return (
   
      <main>
       <BookingForm times={times} changeProps={changeProps} submitForm={submitForm}/>
      </main>
  );
};

export default BookingPage;