import React from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import "./CategoriesPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoriesPage = () => {
  const { category } = useParams();

  return (
    <>
      <section className="categoriesPage__hero">
        <div className="categoriesPage__hero-container">
          <h4 className="categoriesPage__hero-title">{category}</h4>
        </div>
      </section>
      <section className="productCards">
        {data.map((product) => {
          if (product.category === category) {
            return <ProductCard product={product} key={product.id} />;
          }
        })}
      </section>
    </>
  );
};

export default CategoriesPage;
