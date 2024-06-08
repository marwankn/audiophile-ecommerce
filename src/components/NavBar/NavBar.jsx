import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from "/assets/images/shared/desktop/logo.svg";
import hamburgerMenu from "/assets/images/shared/tablet/icon-hamburger.svg";
import checkoutCart from "/assets/images/shared/desktop/icon-cart.svg";
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menu]);

  return (
    <header>
      <nav className="container">
        <div className="navBar">
          <img
            src={hamburgerMenu}
            alt="Menu"
            onClick={() => setMenu(!menu)}
            className="navBar__hamburger-menu"
          />
          <Link to="/" className="navBar__logo">
            <img src={logo} alt="Audiophile Logo" />
          </Link>
          <ul className="navBar__desktop-menu">
            <li>
              <NavLink
                exact="true"
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
      {menu ? <NavDropdownMenu menu={menu} setMenu={setMenu} /> : <></>}
    </header>
  );
};

export default NavBar;
