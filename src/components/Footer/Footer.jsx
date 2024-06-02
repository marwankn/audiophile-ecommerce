import React from "react";
import "./Footer.scss";
import logoPath from "/assets/images/shared/desktop/logo.svg";
import facebookIcon from "/assets/images/shared/desktop/icon-facebook.svg";
import twitterIcon from "/assets/images/shared/desktop/icon-twitter.svg";
import instagramIcon from "/assets/images/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <hr className="footer__line" />
        <div className="footer__content">
          <img src={logoPath} alt="Audiophile Logo" className="footer__logo" />
          <div className="footer__nav">
            <ul className="footer__menu">
              <li>
                <Link className="footer__menu-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories/headphones" className="footer__menu-link">
                  Headphones
                </Link>
              </li>
              <li>
                <Link to="/categories/speakers" className="footer__menu-link">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/categories/earphones" className="footer__menu-link">
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
          <p className="footer__text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="footer__copyright">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="footer__social-media-icons">
            <Link
              className="footer__icon"
              to="https://facebook.com"
              target="_blank"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="footer__icon-img"
              />
            </Link>
            <Link
              className="footer__icon"
              to="https://twitter.com"
              target="_blank"
            >
              <img
                src={twitterIcon}
                alt="Twitter"
                className="footer__icon-img"
              />
            </Link>
            <Link
              className="footer__icon"
              to="https://instagram.com"
              target="_blank"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="footer__icon-img"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
