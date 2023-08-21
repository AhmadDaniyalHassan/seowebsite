import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PageOne from "../components/PageOne";
import PageTwo from '../components/PageTwo'
import PageThree from '../components/PageThree'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="homepage-main">
      <Header />
      <Hero />
      <PageOne />
      <PageTwo />
      <PageThree />
      <Footer />
    </div>
  );
};

export default HomePage;
