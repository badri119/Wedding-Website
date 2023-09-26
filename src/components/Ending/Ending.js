import React from "react";
import "./Ending.css";

const Ending = () => {
  return (
    <div className="bodyending">
      <div className="endingstyling">
        <h1 className="endingtext">
          We hope you'll join us on this special day.
        </h1>
        <div>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="rsvp_button_ending"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ending;
