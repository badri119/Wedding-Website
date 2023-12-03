import React from "react";
import "./NavBar.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  useEffect(() => {
    const el = document.querySelector(".primary-header");

    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    observer.observe(el);
  }, []);

  return (
    <div className="primary-header">
      <div className="wrapper">
        <div className="primary-header__inner">
          <ul className="nav-list">
            <li>
              <Link
                to="landingPage"
                smooth={true}
                duration={500}
                className="navlinks"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="eventsScroll"
                smooth={true}
                duration={500}
                className="navlinks"
                offset={-54}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="stayScroll"
                smooth={true}
                duration={500}
                className="navlinks"
                offset={-54}
              >
                Accomodations
              </Link>
            </li>
            <li>
              <Link
                to="youtubescroll"
                smooth={true}
                duration={500}
                className="navlinks"
                offset={-54}
              >
                Youtube Live Stream
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
