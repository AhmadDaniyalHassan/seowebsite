import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PageOne from "../components/PageOne";

const HomePage = () => {
  return (
    <div className="homepage-main">
      <Header></Header>
      <Hero></Hero>
      <PageOne></PageOne>
    </div>
  );
};

export default HomePage;
