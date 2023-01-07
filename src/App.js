import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import BookingPage from "components/BookingForm";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Main page="main"/>}></Route>
        <Route path="/booking" element={<Main page="booking" />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
