import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

export const Menu = () => {
  return (
    <aside>
      <header>
        <Link to="/" className="myName">
          <span className="Title">Edwin Cruz</span>
          <span className="Subtitle">Desktop and Web Developer</span>
        </Link>

        <Link to="/" className="myName-small">
          <span className="Title">EC</span>
        </Link>
      </header>

      <ul>
        <li>
          <Link to="/home">
            <i className="fa fa-home"></i>
            <span className="nav-text">About Me</span>
          </Link>
        </li>

        <li>
          <Link to="/skills">
            <i className="fa fa-bar-chart-o"></i>
            <span className="nav-text">Skills</span>
          </Link>
          <a href="#"></a>
        </li>
        <li>
          <Link to="/works">
            <i className="fa fa-calendar"></i>
            <span className="nav-text">Works</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-comments-o"></i>
            <span className="nav-text">Contact</span>
          </Link>
        </li>
      </ul>

      <footer>
        <h2 className="Title">I am a footer</h2>
      </footer>
    </aside>
  );
};
