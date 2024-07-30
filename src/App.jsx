import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
