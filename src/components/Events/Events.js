import "./Events.css";
import React from "react";
import cocktail1 from "../../assets/cocktail.png";
import wedding from "../../assets/wedding.png";

const Events = () => {
  return (
    <div className="eventbody">
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
                  <p className="attire">Attire: Pattu Sarees & Veshtis</p>
                </p>

                <p className="info description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
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
                  <p className="attire">Attire: Pattu Sarees & Veshtis</p>
                </p>

                <p className="info description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
