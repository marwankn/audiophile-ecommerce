import React from "react";
import { useParams } from "react-router-dom";
import "./CategoriesPage.scss";

const CategoriesPage = () => {
  const { category } = useParams();
  return (
    <>
      <section className="categoriesPage__hero">
        <div className="categoriesPage__hero-container">
          <h4 className="categoriesPage__hero-title">{category}</h4>
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;
