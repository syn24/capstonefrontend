import React from "react";
import { useState } from "react";
import availableTimes from "./availableTimes";

const BookingForm = () => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("Please select...");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking created!");
    clearForm();
  };

  const clearForm = () => {
    setResDate("");
    setResTime("Please select...");
    setGuests(1);
    setOccasion("");
  };

  return (
    /*

    const PasswordErrorMessage = () => { 
     return ( 
       <p className="FieldError">Password should have at least 8 characters</p> 
     ); 
    }; 
     
    function App() { 
     const [firstName, setFirstName] = useState(""); 
     const [lastName, setLastName] = useState(""); 
     const [email, setEmail] = useState(""); 
     const [password, setPassword] = useState({ 
       value: "", 
       isTouched: false, 
     }); 
     const [role, setRole] = useState("role"); 
    
     const getIsFormValid = () => { 
       return ( 
         firstName && 
         validateEmail(email) && 
         password.value.length >= 8 && 
         role !== "role" 
       ); 
     }; 
     
     const clearForm = () => { 
       setFirstName(""); 
       setLastName(""); 
       setEmail(""); 
       setPassword({ 
         value: "", 
         isTouched: false, 
       }); 
       setRole("role"); 
     }; 
     

     
     return ( 
       <div className="App"> 
         <form onSubmit={handleSubmit}> 
           <fieldset> 
             <h2>Sign Up</h2> 
             <div className="Field"> 
               <label> 
                 First name <sup>*</sup> 
               </label> 
               <input 
                 value={firstName} 
                 onChange={(e) => { 
                   setFirstName(e.target.value); 
                 }} 
                 placeholder="First name" 
               /> 
             </div> 
             <div className="Field"> 
               <label>Last name</label> 
               <input 
                 value={lastName} 
                 onChange={(e) => { 
                   setLastName(e.target.value); 
                 }} 
                 placeholder="Last name" 
               /> 
             </div> 
             <div className="Field"> 
               <label> 
                 Email address <sup>*</sup> 
               </label> 
               <input 
                 value={email} 
                 onChange={(e) => { 
                   setEmail(e.target.value); 
                 }} 
                 placeholder="Email address" 
               /> 
             </div> 
             <div className="Field"> 
               <label> 
                 Password <sup>*</sup> 
               </label> 
               <input 
                 value={password.value} 
                 type="password" 
                 onChange={(e) => { 
                   setPassword({ ...password, value: e.target.value }); 
                 }} 
                 onBlur={() => { 
                   setPassword({ ...password, isTouched: true }); 
                 }} 
                 placeholder="Password" 
               /> 
               {password.isTouched && password.value.length < 8 ? ( 
                 <PasswordErrorMessage /> 
               ) : null} 
             </div> 
             <div className="Field"> 
               <label> 
                 Role <sup>*</sup> 
               </label> 
               <select value={role} onChange={(e) => setRole(e.target.value)}> 
                 <option value="role">Role</option> 
                 <option value="individual">Individual</option> 
                 <option value="business">Business</option> 
               </select> 
             </div> 
             <button type="submit" disabled={!getIsFormValid()}> 
               Create account 
             </button> 
           </fieldset> 
         </form> 
       </div> 
     ); 
    } 
    
    export default App; 
    
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>
    
    
    
    
    */
    <>
      <form onSubmit={handleSubmit} className="bookForm">
        <fieldset>
          <div>
            <label htmlFor="res-date">Choose date</label>
            <input
              value={resDate}
              onChange={(e) => {
                setResDate(e.target.value);
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
              {availableTimes.map((time) => (
                <option value={time.value}>{time.label}</option>
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
             <input type="submit" value="Make Your reservation" /> 
        </fieldset>
      </form>
    </>
  );
};

export default BookingForm;
