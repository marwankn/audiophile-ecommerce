import React, { useEffect } from "react";
import HomepageHero from "../../components/HomepageHero/HomepageHero";
import ProductCategories from "../../components/ProductCategories/ProductCategories";

const HomePage = () => {
  useEffect(() => {
    document.title = "Audiophile | Home";
  }, []);

  return (
    <main>
      <HomepageHero />
      <ProductCategories />
    </main>
  );
};

export default HomePage;
