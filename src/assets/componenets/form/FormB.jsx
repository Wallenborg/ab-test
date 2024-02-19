import React, { useState, useEffect } from "react";
import "./Form.css";

function FormB() {
  const [zenLevel, setZenLevel] = useState(50);
  const [entryTime, setEntryTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleZenLevelChange = (event) => {
    setZenLevel(Number(event.target.value));
  };

  useEffect(() => {
    // Set the entry time when the component mounts (user enters the site)
    setEntryTime(new Date());
  }, []);

  const handleSubmit = () => {
    // Get the time when submitting
    const submitTime = new Date();

    console.log("payload", {
      entryTime,
      submitTime,
      ZenLevel: `${zenLevel}%`,
      formType: "Form-B",
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
          <h2 className="form-heading">What is your Zen level?</h2>
          <form className="form">
            <div className="label-container">
              <input
                type="range"
                id="zenLevel"
                name="zenLevel"
                min="0"
                max="100"
                value={zenLevel}
                onChange={handleZenLevelChange}
              />
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

export default FormB;
