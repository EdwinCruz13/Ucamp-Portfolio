import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
import fb_icon from "../../icons/fb.png";
import instagram_icon from "../../icons/instagram.png";
import twitter_icon from "../../icons/twitter.png";
import tiktok_icon from "../../icons/tiktok.png";

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
      <div id="social-media-link">
          <ul>
            <li>
              <a href="#">
                <img src={tiktok_icon} alt="SocialMedia-tiktok" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={twitter_icon} alt="SocialMedia-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram_icon} alt="SocialMedia-instagran" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={fb_icon} alt="SocialMedia-fb" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </aside>
  );
};
