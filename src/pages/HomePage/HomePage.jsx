import React, { useEffect } from "react";
import HomepageHero from "../../components/HomepageHero/HomepageHero";

const HomePage = () => {
  useEffect(() => {
    document.title = "Audiophile | Home";
  }, []);

  return (
    <main>
      <HomepageHero />
    </main>
  );
};

export default HomePage;
