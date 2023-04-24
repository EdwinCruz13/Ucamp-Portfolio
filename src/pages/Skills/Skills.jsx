import React from "react";

import { Menu } from "../../components/Menu/Menu";
import "../style.css";

export const Skills = () => {
  return (
    <div className="menu-container">
      <Menu />

      <section className="pagination-container">
        <div className="section-body">
          <div className="header">
            <h2 className="blast-root">My skills</h2>
          </div>

          <div className="scored-columns">
            <section>
              <h3 className="blast-description">.NET</h3>
              <div className="level-section level-90">
                <h3>C#</h3>
              </div>

              <div className="level-section level-70">
                <h3>Asp.Net</h3>
              </div>

              <div className="level-section level-50">
                <h3>VB.Net</h3>
              </div>

              <div className="level-section level-30">
                <h3>Winform - Devexpress</h3>
              </div>

              <div className="level-section level-50">
                <h3>WCF</h3>
              </div>

              <div className="level-section level-10">
                <h3>SQL-Server</h3>
              </div>
            </section>

            <section>
              <h3 className="blast-description">Frontend</h3>
              <div className="level-section level-90">
                <h3>ReactJS</h3>
              </div>

              <div className="level-section level-70">
                <h3>Html5</h3>
              </div>

              <div className="level-section level-30">
                <h3>Css3</h3>
              </div>
            </section>

            <section>
              <h3 className="blast-description">Backend</h3>
              <div className="level-section level-90">
                <h3>NodeJS</h3>
              </div>

              <div className="level-section level-70">
                <h3>ExpressJS</h3>
              </div>

              <div className="level-section level-10">
                <h3>Mongo</h3>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
