import "./Stay.css";
import React from "react";

const Stay = () => {
  const stay = [
    {
      id: 1,
      hName: "Courtyard by Marriott Fremont Silicon Valley",
      hAdd: "47000 Lakeview Blvd, Fremont, CA 94538, United States",
      pNum: "+1 510-656-1800",
      Hurl: "https://www.marriott.com/en-us/hotels/sjcfe-courtyard-fremont-silicon-valley/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.218428357446!2d-121.93873242413025!3d37.47917157206133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc637fe2eb7b3%3A0x82bf7e6b60213f80!2sCourtyard%20by%20Marriott%20Fremont%20Silicon%20Valley!5e0!3m2!1sen!2sca!4v1697227223857!5m2!1sen!2sca",
    },
    {
      id: 2,
      hName: "Hyatt Place Fremont/Silicon Valley",
      hAdd: "3101 W Warren Ave, Fremont, CA 94538, United States",
      pNum: "+1 510-623-6000",
      Hurl: "https://www.hyatt.com/en-US/hotel/california/hyatt-place-fremont-silicon-valley/sfozf?src=corp_lclb_gmb_seo_sfozf",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.032125140618!2d-121.94241182413008!3d37.48356827206021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc6492d487501%3A0x40ef4dbc078b2d91!2sHyatt%20Place%20Fremont%2FSilicon%20Valley!5e0!3m2!1sen!2sca!4v1697226836493!5m2!1sen!2sca",
    },
    {
      id: 3,
      hName: "Residence Inn by Marriott Milpitas Silicon Valley",
      hAdd: "1501 California Cir, Milpitas, CA 95035, United States",
      pNum: "+1 408-941-9222",
      Hurl: "https://www.marriott.com/en-us/hotels/sjcml-residence-inn-milpitas-silicon-valley/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4344109586177!2d-121.92317962452924!3d37.450463930775975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc8bc1b6f7237%3A0x17cae3308be12c6a!2sResidence%20Inn%20by%20Marriott%20Milpitas%20Silicon%20Valley!5e0!3m2!1sen!2sca!4v1697227509757!5m2!1sen!2sca",
    },
  ];
  return (
    <div className="staybody" name="stayScroll">
      <h2 className="staytitle">Accomodations</h2>
      <div>
        <p className=" staytext">
          {" "}
          Please find below a list of hotels near the wedding venue
        </p>
      </div>

      <div className="stayeventcontainer">
        {stay.map(({ id, hName, hAdd, pNum, Hurl, iframe }) => (
          <div className="stayitem-container">
            <div key={id} className="staybody-container">
              <p className="staytitlecontent">{hName}</p>
              <p className="stayaddress">{hAdd}</p>
              <p>{pNum}</p>
              <p className="staymaps">
                <a
                  className="staymap"
                  href={Hurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotel's Website
                </a>

                <iframe
                  id="iframemap"
                  title="Map Location"
                  src={iframe}
                  className="iframes"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stay;
