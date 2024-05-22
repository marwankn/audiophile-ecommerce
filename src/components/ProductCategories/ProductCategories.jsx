import React from "react";
import "./ProductCategories.scss";
import menuData from "../../assets/data/menuData.json";
import ProductCategoryCard from "../ProductCategoryCard/ProductCategoryCard";

const ProductCategories = () => {
  return (
    <div className="productCategories">
      <div className="productCategories__container">
        {menuData.map((data) => {
          return <ProductCategoryCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
