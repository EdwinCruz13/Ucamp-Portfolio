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
                  High-quality hydroponic products and technical support
                  superior to help growers succeed.
                </p>
                <a
                  href="https://edwincruz13.github.io/Ucamp-LandingPage/"
                  className="card-link"
                >
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
                  View the performance of the most popular coins in the forex
                  market. The dashboard will help you understand the behavior
                  and make the best decision.
                </p>
                <a
                  href="https://edwincruz13.github.io/Ucamp-Dashboard/"
                  className="card-link"
                >
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
                  In this restaurant system it will allow the order and purchase
                  of dishes online in addition to obtaining said orders and
                  shipping the same, ideal for MSMEs and small merchants.
                </p>
                <a
                  href="https://restaurant-website-0y6g.onrender.com/Home"
                  className="card-link"
                >
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
                  E-commerce refers to the buying and selling of products or
                  services over the Internet. This includes everything, from
                  online marketplaces to online stores operated by individual
                  companies.
                </p>
                <a
                  href="https://ucamp-ecommerce-client.onrender.com/"
                  className="card-link"
                >
                  Go to site
                </a>
              </div>
            </article>

            <article className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://github.com/EdwinCruz13/SIGT/raw/master/tutorial/waiting.png?raw=true"
                alt="Eccommerce"
              />
              <div className="card-body">
                <h2 className="card-title">Track manager app</h2>
                <p className="card-text">
                  Platform that allows ordering the customer service process
                  client in person, measuring performance and expedite the
                  processing process.
                </p>
                <a
                  href="https://github.com/EdwinCruz13/SIGT"
                  className="card-link"
                >
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
                  A website that allow to visualize loan applications made by
                  company's client.
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
