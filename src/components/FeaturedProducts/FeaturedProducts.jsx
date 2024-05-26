import React from "react";
import "./FeaturedProducts.scss";
import { Link } from "react-router-dom";
import patternCircle from "../../assets/images/home/desktop/pattern-circles.svg";

const FeaturedProducts = () => {
  return (
    <section className="featuredProducts">
      <div className="featuredProducts-largeCard">
        <img
          src={patternCircle}
          className="featuredProducts-largeCard__background-pattern"
        />
        <div className="featuredProducts-largeCard__container">
          <img
            src=""
            alt="Speaker Image"
            className="featuredProducts-largeCard__image"
          />
          <div className="featuredProducts-largeCard__text-container">
            <h3 className="featuredProducts-largeCard__title">ZX9 SPEAKER</h3>
            <p className="featuredProducts-largeCard__text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              to={`/categories/speakers/zx9-speaker`}
              className="featuredProducts-largeCard__button"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
