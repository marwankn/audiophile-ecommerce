import React from "react";
import "./HomepageHero.scss";
import { Link } from "react-router-dom";

const HomepageHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <h4 className="hero__subtitle">new product</h4>
          <h1 className="hero__title">XX99 Mark II HeadphoneS</h1>
          <p className="hero__detail-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            vero doloribus id aliquam aperiam distinctio earum, enim neque
            officiis. Amet, accusantium ea itaque laborum fuga a. Ipsa obcaecati
            veniam neque?
          </p>
          <Link className="hero__button" to="/categories/headphones">
            See product
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomepageHero;
