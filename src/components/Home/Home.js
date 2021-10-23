import React from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import TrProducts from "./Trending/TrProducts";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <TrProducts />
    </>
  );
};

export default Home;
