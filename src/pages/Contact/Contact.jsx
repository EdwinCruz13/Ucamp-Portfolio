import React from "react";
import { Menu } from "../../components/Menu/Menu";

import fb_icon from "../../icons/fb.png";
import instagram_icon from "../../icons/instagram.png";
import twitter_icon from "../../icons/twitter.png";
import tiktok_icon from "../../icons/tiktok.png";

export const Contact = () => {
  return (
    <div className="menu-container">
      <Menu />

      <section className="pagination-container">
        <div className="section-body">
          <div className="header">
            <h2 className="blast-root">Contact me</h2>
            <p className="blast-description blast-description-md">Managua, Nicaragua.</p>
            <p className="blast-description blast-description-md">(505) 8899-8469</p>
            <p className="blast-description blast-description-md">edwin.cruz13@hotmail.com</p>
            <div className="social-media-link-contact" >
                <ul style={{justifyContent: "left"}}>
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
          </div>
        </div>
      </section>
    </div>
  );
};
