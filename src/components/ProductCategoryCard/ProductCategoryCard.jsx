import React from "react";
import "./ProductCategoryCard.scss";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ data }) => {
  return (
    <div class="productCategoryCard__card" key={data.id}>
      <div class="productCategoryCard__image-container">
        <img
          src={data.imgPath}
          alt={`${data.catergory} logo`}
          className="productCategoryCard__image"
        />
      </div>
      <h6 class="productCategoryCard__title">{data.category}</h6>
      <Link
        to={`/categories/${data.category}`}
        className="button3"
        onClick={() => setMenu(false)}
      >
        Shop
      </Link>
    </div>
  );
};

export default ProductCategoryCard;
