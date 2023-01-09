import React from "react";
import { useState } from "react";

const BookingForm = ({times, changeProps, submitForm}) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("Please select...");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  console.log(times);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();

    const formData = {
      resDate,
      resTime,
      guests,
      occasion,
  };
    submitForm(formData);
  };

  const clearForm = () => {
    setResDate("");
    setResTime("Please select...");
    setGuests(1);
    setOccasion("");
  };

  return (
      
    <>
      <form onSubmit={handleSubmit} className="bookForm">
        <fieldset>
          <div>
            <label htmlFor="res-date">Choose date</label>
            <input
              value={resDate}
              onChange={(e) => {
                setResDate(e.target.value);
                changeProps({type: 'date', payload: { "date": e.target.value}}) 
              }}
              type="date"
              id="res-date"
              placeholder="Reservation date"
            />
          </div>
          <div>
            <label htmlFor="res-time">Choose time</label>
            <select
              value={resTime}
              onChange={(e) => setResTime(e.target.value)}
              id="res-time"
            >
              <option value="Please select..."> -- Select a time -- </option>
              {times.map((time) => (
                <option value={time} key={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of guests</label>
            <input
              value={guests}
              onChange={(e) => {
                setGuests(
                  parseInt(e.target.value) ? parseInt(e.target.value) : 1
                );
              }}
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
            />
          </div>
          <div> 
               <label htmlFor="occasion"> 
               Occasion
               </label> 
               <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion"> 
               <option value="Please select..."> -- Select an occasion -- </option>
                <option value="birthday">Birthday</option>
                <option value="anniversairy">Anniversary</option>
               </select> 
             </div>
             <input type="submit" disabled={!resDate || !resTime || !occasion || !guests || +guests < 1} value="Make Your reservation" /> 
        </fieldset>
      </form>
    </>
  );
};

export default BookingForm;
