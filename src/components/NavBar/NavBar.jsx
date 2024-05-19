import React from "react";
import "./NavBar.scss";
import logo from "../../assets/images/shared/desktop/logo.svg";
import hamburgerMenu from "../../assets/images/shared/tablet/icon-hamburger.svg";
import checkoutCart from "../../assets/images/shared/desktop/icon-cart.svg";
import { NavLink } from "react-router-dom";
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";

const NavBar = () => {
  return (
    <header>
      <nav className="container">
        <div className="navBar__mobile">
          <img src={hamburgerMenu} alt="" />
          <img src={logo} alt="Audiophile Logo" className="navBar__logo" />
          <img
            src={checkoutCart}
            alt="Checkout Cart Logo"
            className="navBar__checkoutCart"
          />
        </div>
        <div className="navBar__tablet">
          <div className="navBar__tablet-menu">
            <img
              src={hamburgerMenu}
              alt=""
              className="navBar__tablet-hamburger"
            />
            <img src={logo} alt="Audiophile Logo" className="navBar__logo" />
          </div>
          <img
            src={checkoutCart}
            alt="Checkout Cart Logo"
            className="navBar__checkoutCart"
          />
        </div>
        <div className="navBar__desktop">
          <img src={logo} alt="Audiophile Logo" className="navBar__logo" />
          <ul className="navBar__desktop-menu">
            <li>
              <NavLink
                exact
                className={({ isActive }) =>
                  isActive
                    ? "navBar__desktop-menu-link--active"
                    : "navBar__desktop-menu-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/headphones"
                className={({ isActive }) =>
                  isActive
                    ? "navBar__desktop-menu-link--active"
                    : "navBar__desktop-menu-link"
                }
              >
                Headphones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/speakers"
                className={({ isActive }) =>
                  isActive
                    ? "navBar__desktop-menu-link--active"
                    : "navBar__desktop-menu-link"
                }
              >
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/earphones"
                className={({ isActive }) =>
                  isActive
                    ? "navBar__desktop-menu-link--active"
                    : "navBar__desktop-menu-link"
                }
              >
                Earphones
              </NavLink>
            </li>
          </ul>
          <img
            src={checkoutCart}
            alt="Checkout Cart Logo"
            className="navBar__checkoutCart"
          />
        </div>
      </nav>
      <NavDropdownMenu />
    </header>
  );
};

export default NavBar;
