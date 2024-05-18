import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Audiophile | Home";
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
