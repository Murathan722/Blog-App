import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import AnaSayfa from "./components/AnaSayfa";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhyChooseUs />
              <GetStarted />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route path="AnaSayfa" element={<AnaSayfa />} />
      </Routes>
    </Router>
  );
}

export default App;
