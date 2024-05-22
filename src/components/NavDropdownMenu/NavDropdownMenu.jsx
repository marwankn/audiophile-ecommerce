import React from "react";
import "./NavDropdownMenu.scss";
import menuData from "../../assets/data/menuData.json";
import ProductCategoryCard from "../ProductCategoryCard/ProductCategoryCard";

const NavDropdownMenu = ({ menu, setMenu }) => {
  return (
    <div
      className="underlay"
      onClick={() => {
        setMenu(!menu);
      }}
    >
      <div
        className="navDropdownMenu"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="navDropdownMenu__container">
          {menuData.map((data) => {
            return <ProductCategoryCard data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavDropdownMenu;
