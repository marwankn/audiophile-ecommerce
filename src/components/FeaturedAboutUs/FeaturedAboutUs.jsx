import React from "react";
import "./FeaturedAboutUs.scss";

const FeaturedAboutUs = () => {
  return (
    <div className="featuredAboutUs">
      <img className="featuredAboutUs__image"></img>
      <div className="featuredAboutUs__text-container">
        <h4 className="featuredAboutUs__title">
          Bringing you the{" "}
          <span className="featuredAboutUs__title--highlight">best</span> audio
          gear
        </h4>
        <p className="featuredAboutUs__text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default FeaturedAboutUs;
