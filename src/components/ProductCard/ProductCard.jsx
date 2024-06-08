import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard" id={product.id}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={product.categoryImage.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={product.categoryImage.tablet}
        />
        <img
          src={product.categoryImage.mobile}
          alt={product.name}
          className="productCard__image"
        />
      </picture>
      <div className="productCard__texts-container">
        {product.new && <p className="productCard__new">New Product</p>}
        <h4 className="productCard__title">{product.name}</h4>
        <p className="productCard__description">{product.description}</p>
        <Link
          to={`/categories/${product.category}/${product.slug}`}
          className="productCard__button"
        >
          See product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
