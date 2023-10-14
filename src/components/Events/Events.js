import "./Events.css";
import React from "react";
import cocktail1 from "../../assets/cocktail.png";
import wedding from "../../assets/wedding.png";

const Events = () => {
  return (
    <div className="eventbody" name="eventsScroll">
      <h2 className="eventstitle">Events</h2>

      <div className="eventcontainer">
        <div className="item-container">
          <div className="img-container">
            <img src={cocktail1} alt="Event image"></img>
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">Cocktail Night</p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <p>
                    <p className="hoveringinfo">
                      Hover or click for more info..
                    </p>
                    Venue:{" "}
                    <span>
                      <a
                        className="venuelink"
                        href="https://maps.app.goo.gl/PGTCPTYrXipMqzyx7?g_st=iw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        43618 Skye Rd
                      </a>
                    </span>
                  </p>
                </p>
                <p className="info">
                  Saturday, December 2nd
                  <p className="attire">Attire: Bolloywood Glam</p>
                </p>

                <p className="info description">
                  "Sip, Savor, and Celebrate with us at our Cocktail Night! Join
                  us for an evening of delicious drinks, dance and delightful
                  company as we kick off our wedding festivities in style.
                </p>
                {/* <div>
                  <a
                    href="https://forms.gle/rnnJHmGZM4VnY6A68"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rsvp_button_events"
                  >
                    RSVP
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="item-container">
          <div className="img-container">
            <img src={wedding} alt="Event image"></img>
          </div>

          <div className="body-container">
            <div className="overlay"></div>

            <div className="event-info">
              <p className="title">Muhurtham</p>
              <div className="separator"></div>

              <div className="additional-info">
                <p className="info">
                  <p className="hoveringinfo">Hover or click for more info..</p>
                  <p>
                    Venue:{" "}
                    <span>
                      <a
                        className="venuelink"
                        href="https://maps.app.goo.gl/PGTCPTYrXipMqzyx7?g_st=iw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        43618 Skye Rd
                      </a>
                    </span>
                  </p>
                </p>
                <p className="info">
                  Monday, December 4th
                  <p className="attire">Attire: Southern Chic</p>
                </p>

                <p className="info description">
                  At the heart of every Indian wedding is the 'Muhurtham' – the
                  auspicious and carefully chosen moment that marks the
                  beginning of our lifelong journey together.
                </p>
                {/* <div>
                  <a
                    href="https://forms.gle/rnnJHmGZM4VnY6A68"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rsvp_button_events"
                  >
                    RSVP
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rsvpevent">
        <a
          href="https://forms.gle/rnnJHmGZM4VnY6A68"
          target="_blank"
          rel="noopener noreferrer"
          className="rsvp_button_events"
        >
          RSVP
        </a>
      </div>
    </div>
  );
};

export default Events;
