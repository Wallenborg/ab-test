import React, { useState, useEffect } from "react";
import "./Form.css";

function FormA() {
  // useState to keep track and changes of enter-time, choice and submitted-time.
  const [userChoice, setUserChoice] = useState(null);
  const [entryTime, setEntryTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChoiceChange = (event) => {
    setUserChoice(event.target.value);
  };

  useEffect(() => {
    // Set the entry time when the component mounts (user enters the site)
    setEntryTime(new Date());
  }, []);

  const handleSubmit = () => {
    //get timen when submit
    const submitTime = new Date();

    console.log("Test A - From start to submit:", {
      entryTime,
      submitTime,
      userChoice: `Zen state: ${userChoice}`,
    });

    // Update state to show "Thank You" message
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {submitted ? (
        <h2 className="form-heading">Thank You!</h2>
      ) : (
        <>
          <h2 className="form-heading">Are you in a Zen state?</h2>
          <form className="form">
            <div className="label-container">
              <label className="label">
                <input
                  type="radio"
                  value="yes"
                  id="yes"
                  name="zenState"
                  checked={userChoice === "yes"}
                  onChange={handleChoiceChange}
                />
                YES
              </label>
              <label className="label">
                <input
                  type="radio"
                  value="no"
                  id="no"
                  name="zenState"
                  checked={userChoice === "no"}
                  onChange={handleChoiceChange}
                />
                N0
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
            >
              SUBMIT
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default FormA;
