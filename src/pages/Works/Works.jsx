import React from "react";

import { Menu } from "../../components/Menu/Menu";

export const Works = () => {
  return (
    <div className="menu-container">
      <Menu />

      <section className="pagination-container">
        <div className="section-body">
          <div className="header">
            <h2 className="blast-root">My Jobs</h2>
          </div>

          

          <div className="pics myjobs">
            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/Ucamp-LandingPage/blob/master/resources/Sistema-Verticales-hidrop%C3%B3nicos.png?raw=true"
                alt="Granja 2.0"
              />
              <div className="card-body">
                <h2 className="card-title">A landing Page</h2>
                <p className="card-text">
                  Productos hidropónicos de alta calidad y soporte técnico
                  superior para ayudar a los productores a tener éxito.
                </p>
                <a href="https://edwincruz13.github.io/Ucamp-LandingPage/" className="card-link">
                  Go to site
                </a>
              </div>
            </article>

            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://raw.githubusercontent.com/EdwinCruz13/Ucamp-Dashboard/main/structure/desktop.png"
                alt="Card image Dashboard"
              />
              <div className="card-body">
                <h2 className="card-title">A Dashboard</h2>
                <p className="card-text">
                  Visualiza el rendimiento de monedas mas populares en el
                  mercado forex. El dashboard te ayudará a comprender el
                  comportamiento y tomar la mejore decisión.
                </p>
                <a href="https://edwincruz13.github.io/Ucamp-Dashboard/" className="card-link">
                  Go to site
                </a>
              </div>
            </article>

            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/Ucamp-Restaurant/raw/main/structure/e2.png?raw=true"
                alt="Restaurant App"
              />
              <div className="card-body">
                <h2 className="card-title">A Restaurant app</h2>
                <p className="card-text">
                  En este sistema de restaurante permitirá la orden y compra de
                  platillos online ademas de obtener dichos pedidos y envío del
                  mismo, ideal para mipyme y pequeños comerciantes.
                </p>
                <a href="https://restaurant-website-0y6g.onrender.com/Home" className="card-link">
                  Go to site
                </a>
              </div>
            </article>

            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/Ucamp-Ecommerce/raw/main/othersFile/images/React-App.png?raw=true"
                alt="Eccommerce"
              />
              <div className="card-body">
                <h2 className="card-title">Ecommerce App</h2>
                <p className="card-text">
                  El comercio electrónico se refiere a la compra y venta de
                  productos o servicios a través de Internet. Esto incluye todo,
                  desde mercados en línea hasta tiendas en línea operadas por
                  empresas individuales.
                </p>
                <a href="https://ucamp-ecommerce-client.onrender.com/" className="card-link">
                  Go to site
                </a>
              </div>
            </article>
          </div>

          <div className="pics myjobs">
            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/SIGT/raw/master/tutorial/waiting.png?raw=true"
                alt="Eccommerce"
              />
              <div className="card-body">
                <h2 className="card-title">Gestor de turno</h2>
                <p className="card-text">
                  Plataforma que permite ordenar el proceso de atención al
                  cliente de manera presencial, midiendo el rendimiento y
                  agilizar el proceso de trámite.
                </p>
                <a href="https://github.com/EdwinCruz13/SIGT" className="card-link">
                  Go to site
                </a>
              </div>
            </article>

            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/Ucamp-LandingPage/blob/master/resources/IssdhuWebsite.png?raw=true"
                alt="Eccommerce"
              />
              <div className="card-body">
                <h2 className="card-title">Manageable Website</h2>
                <p className="card-text">
                  Sitio web de una compañia de préstamos, permite visualizar estados de cuentas y recibos de sus clientes.
                </p>
                <a href="https://www.issdhu.gob.ni/" className="card-link">
                  Go to site
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
