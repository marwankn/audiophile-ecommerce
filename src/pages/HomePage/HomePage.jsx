import React, { useEffect } from "react";
import HomepageHero from "../../components/HomepageHero/HomepageHero";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import FeaturedAboutUs from "../../components/FeaturedAboutUs/FeaturedAboutUs";

const HomePage = () => {
  useEffect(() => {
    document.title = "Audiophile | Home";
  }, []);

  return (
    <main>
      <HomepageHero />
      <ProductCategories />
      <FeaturedAboutUs />
    </main>
  );
};

export default HomePage;
