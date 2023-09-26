import "./Transport.css";
import React from "react";
import auto from "../../assets/auto.png";

async function copyContent() {
  try {
    await navigator.clipboard.writeText("Content to Copy");
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

const Transport = () => {
  return (
    <div className="transportbody">
      <h2 className="transporttitle">Transport</h2>
      {/* <div>
        <img className="auto-image" src={auto} alt="auto_image"></img>
      </div> */}
      <div>
        <p className="ubertext">
          If you're planning to use uber as an option to travel from the place
          you're staying at to the wedding destination, please use the following{" "}
          Uber Code: <br />
          <span className="ubercode" onclick="copyContent()">
            *code*
          </span>
        </p>
      </div>
    </div>
  );
};

export default Transport;
