import React from "react";
import "./Youtube.css";

const Youtube = () => {
  return (
    <div className="youtubebody" name="youtubescroll">
      <div className="staytitle">Youtube Live Stream</div>
      <div>
        <p className=" staytext">
          {" "}
          Kindly click on the provided YouTube link to access the live wedding
          stream.
        </p>
      </div>
      <div className="youtubelink">
        <iframe
          width="620"
          height="315"
          src="https://www.youtube.com/watch?v=QCMvZzs97So"
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
