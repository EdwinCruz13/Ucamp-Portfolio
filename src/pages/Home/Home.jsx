import React from "react";

import { Menu } from "../../components/Menu/Menu";

import "./Home.css";

export const Home = () => {
  return (
    <div className="menu-container">
      <Menu />

      <section className="pagination-container">
        <div className="section-body">
          <div className="introducing">
            <h2 className="blast-root">Mis habilidades</h2>
            <p className="blast-description">
              Soy un desarrollador con experiencia en ambientes de desarrollo
              .NET usando lenguajes de programación como C#, vb.Net y ASP.NET
              MVC, además, con el conocimiento en creación y despliegues de
              Restful API en WCF.
              <br />
              Mis trabajos fueron la creación y despliegues de aplicaciones de
              escritorios en negocios de indelos bancarios, contables y atención
              a público.
            </p>

            <p className="blast-description">
              Tengo conocimientos en desarrollo web usando HTML5, CSS3 y
              javascript y sin temor a aplicar mis conocimientos he creado
              aplicaciones con dichas tecnologias y desplegado exitasamente mis
              aplicaciones en servidores windows en entorno en IIS.
            </p>
            <p className="blast-description">
              En búsqueda de nuevos retos decidí mejorar mis habilidades en
              desarrollo web obteniendo conocimiento en MERN stack realizando
              algunos proyectos que podrian interesarte.
            </p>
          </div>

          <div className="skills">
            <div className="level-section">
              <h3>C#</h3>
            </div>

            <div className="level-section">
              <h3>C#</h3>
            </div>

            <div className="level-section">
              <h3>C#</h3>
            </div>

            <div className="level-section">
              <h3>C#</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
