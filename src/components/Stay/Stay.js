import "./Stay.css";
import React from "react";

const Stay = () => {
  return (
    <div className="staybody" name="stayScroll">
      <h2 className="staytitle">Hotel Recommendations</h2>
      <div>
        <p className=" staytext">
          {" "}
          Here are a bunch of hotels that you can stay at during your visit to
          San Franciso
        </p>
      </div>

      <div className="stayeventcontainer">
        <div className="stayitem-container">
          <div className="staybody-container">
            <p className="staytitlecontent">
              Courtyard by Marriott Fremont Silicon Valley
            </p>
            <p className="stayaddress">
              47000 Lakeview Blvd, Fremont, CA 94538, United States
            </p>
            <p>+1 510-656-1800</p>
            <p className="staymaps">
              <a
                className="staymap"
                href="https://www.marriott.com/en-us/hotels/sjcfe-courtyard-fremont-silicon-valley/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotel's Website
              </a>

              <iframe
                id="iframemap"
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.218428357446!2d-121.93873242413025!3d37.47917157206133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc637fe2eb7b3%3A0x82bf7e6b60213f80!2sCourtyard%20by%20Marriott%20Fremont%20Silicon%20Valley!5e0!3m2!1sen!2sca!4v1697227223857!5m2!1sen!2sca"
                className="iframes"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>

        <div className="stayitem-container">
          <div className="staybody-container">
            <p className="staytitlecontent">
              Hyatt Place Fremont/Silicon Valley
            </p>
            <p className="stayaddress">
              3101 W Warren Ave, Fremont, CA 94538, United States
            </p>
            <p>+1 510-623-6000</p>
            <p className="staymaps">
              <a
                className="staymap"
                href="https://www.hyatt.com/en-US/hotel/california/hyatt-place-fremont-silicon-valley/sfozf?src=corp_lclb_gmb_seo_sfozf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotel's Website
              </a>

              <iframe
                id="iframemap"
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.032125140618!2d-121.94241182413008!3d37.48356827206021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc6492d487501%3A0x40ef4dbc078b2d91!2sHyatt%20Place%20Fremont%2FSilicon%20Valley!5e0!3m2!1sen!2sca!4v1697226836493!5m2!1sen!2sca"
                className="iframes"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
        <div className="stayitem-container">
          <div className="staybody-container">
            <p className="staytitlecontent">
              Residence Inn by Marriott Milpitas Silicon Valley
            </p>
            <p className="stayaddress">
              1501 California Cir, Milpitas, CA 95035, United States
            </p>
            <p>+1 408-941-9222</p>
            <p className="staymaps">
              <a
                className="staymap"
                href="https://www.marriott.com/en-us/hotels/sjcml-residence-inn-milpitas-silicon-valley/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotel's Website
              </a>

              <iframe
                id="iframemap"
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4344109586177!2d-121.92317962452924!3d37.450463930775975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc8bc1b6f7237%3A0x17cae3308be12c6a!2sResidence%20Inn%20by%20Marriott%20Milpitas%20Silicon%20Valley!5e0!3m2!1sen!2sca!4v1697227509757!5m2!1sen!2sca"
                className="iframes"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
