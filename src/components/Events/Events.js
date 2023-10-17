import "./Events.css";
import React from "react";
import cocktail1 from "../../assets/cocktail.jpeg";
import wedding from "../../assets/iyer2.jpeg";

const Events = () => {
  const events = [
    {
      id: 1,
      src: cocktail1,
      text: "Cocktail Night",
      venue: "https://maps.app.goo.gl/VahGHLx1WbM9FWrF8",
      name: "Del Valle Winery",
      date: "Sunday, December 3rd",
      time: "Time: 5:30 PM - 10PM PT",
      attire: "Attire: Bollywood Glam",
      para: `Sip, Savor, and Celebrate with us at our Cocktail Night! Join
    us for an evening of delicious drinks, dance and delightful
    company as we kick off our wedding festivities in style.`,
    },

    {
      id: 2,
      src: wedding,
      text: "Muhurtham",
      venue: "https://maps.app.goo.gl/PGTCPTYrXipMqzyx7?g_st=iw",
      name: "43618 Skye Rd",
      date: "Monday, December 4th",
      time: "Time: 9:00 AM PT",
      attire: "Attire: Southern Chic",
      para: `At the heart of every Indian wedding is the 'Muhurtham' – the
    auspicious and carefully chosen moment that marks the
    beginning of our lifelong journey together.`,
    },
  ];
  return (
    <div className="eventbody" name="eventsScroll">
      <h2 className="eventstitle">Events</h2>

      <div className="eventcontainer">
        {events.map(
          ({ id, src, text, venue, name, date, time, attire, para }) => (
            <div className="item-container">
              <div key={id} className="img-container">
                <img src={src} alt="Event"></img>
              </div>

              <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                  <p className="title">{text}</p>
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
                            href={venue}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name}
                          </a>
                        </span>
                      </p>
                    </p>
                    <p className="info">
                      {date}
                      <p>{time}</p>
                      <p className="attire">{attire}</p>
                    </p>

                    <p className="info description">{para}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="rsvpevent">
        <a
          href="https://www.theknot.com/us/janaki-kannan-and-vinay-vijayakumar-dec-2023/rsvp"
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
