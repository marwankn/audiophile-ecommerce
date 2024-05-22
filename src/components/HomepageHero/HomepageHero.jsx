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
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
