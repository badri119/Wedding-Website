import React from "react";
import "./NavBar.css";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const el = document.querySelector(".primary-header");
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    //   { threshold: [1] }
    // );

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
              <a className="navlinks" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navlinks" href="#">
                Events
              </a>
            </li>
            <li>
              <a className="navlinks" href="#">
                Stay
              </a>
            </li>
            <li>
              <a className="navlinks" href="#">
                Transport
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
