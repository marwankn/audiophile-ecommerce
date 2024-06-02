import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
