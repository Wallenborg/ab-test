import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/componenets/header/Header";
import { FaArrowAltCircleDown } from "react-icons/fa";
import FormA from "./assets/componenets/form/FormA";
import FormB from "./assets/componenets/form/FormB";
import { FaMobileAlt } from "react-icons/fa";
import Footer from "./assets/componenets/footer/Footer";

function App() {
  //A/B test FormA and FormB, to test which form design leads to better user engagement
  const [showFormA, setShowFormA] = useState(false);

  useEffect(() => {
    const showFormAorFormB = Math.random() < 0.5;

    setShowFormA(showFormAorFormB);
  });

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
