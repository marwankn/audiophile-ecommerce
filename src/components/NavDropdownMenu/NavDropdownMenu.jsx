import React from "react";
import "./NavDropdownMenu.scss";
import headphoneImg from "../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import menuData from "../../assets/data/menuData.json";
import { Link, Navigate } from "react-router-dom";

const NavDropdownMenu = () => {
  return (
    <div className="underlay">
      <div className="navDropdownMenu">
        <div className="navDropdownMenu__container">
          {menuData.map((data) => {
            return (
              <div class="navDropdownMenu__card" key={data.id}>
                <div class="navDropdownMenu__image-container">
                  <img
                    src={data.imgPath}
                    alt={`${data.catergory} logo`}
                    className="navDropdownMenu__image"
                  />
                </div>
                <h6 class="navDropdownMenu__title">{data.category}</h6>
                <Link to={`/categories/${data.category}`} className="button3">
                  Shop
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavDropdownMenu;
