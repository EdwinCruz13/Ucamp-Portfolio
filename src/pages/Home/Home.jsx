import React from "react";

import { Menu } from "../../components/Menu/Menu";

import "../style.css";

export const Home = () => {
  return (
    <div className="menu-container">
      <Menu />

      <section className="pagination-container">
        <div className="section-body">
          <div className="header">
            <h2 className="blast-root">Me, Myself and I will be</h2>
            <p className="blast-description blast-description-md">
              I am a developer with experience in development environments .NET.
              My work done was the creation and deployment of desktop
              applications in banking indelos businesses, accountants and
              customer service using programming languages C#, VB.Net, Asp.Net
              and WCF.
            </p>

            <p className="blast-description blast-description-md">
              I have the knowledge in web development using HTML5, CSS3 and
              Javascript and without fear of applying my knowledges I have
              created applications with said technologies and successfully
              deployed more applications on windows servers in IIS environment.
            </p>
            <p className="blast-description blast-description-md">
              Seeking for of new challenges I decided to improve my skills in web
              development gaining knowledge in MERN stack performing Some
              projects that might interest you.
            </p>
          </div>

          <div className="pics">
            <section></section>

            <section></section>

            <section></section>
          </div>
        </div>
      </section>
    </div>
  );
};
