import React, { useState } from "react";
import "./App.css";
import Header from "./assets/componenets/header/Header";
import Footer from "./assets/componenets/footer/Footer";
import FormA from "./assets/componenets/form/FormA";
import FormB from "./assets/componenets/form/FormB";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

function App() {
  //A/B test FormA and FormB, to test which form design leads to better user engagement
  const [showFormA, setShowFormA] = useState(Math.random() < 0.5);

  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="box-zen-line">
          <h2 className="sub-title">
            Scroll Yourself
            <br /> Down to a<br /> State of Zen!
          </h2>
          <FaArrowAltCircleDown
            className="start-icon"
            aria-label="Scroll down"
            alt="Arrow down"
          />

          <div className="zen-line"></div>
          <p className="end-text">You Have Reached The End Of Your Journey</p>
          <FaMobileAlt className="end-icon" alt="Mobile device" />
          {showFormA ? <FormA /> : <FormB />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;