import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="themeChange ">
      <Header />
      <HeroSection />
      <Stats />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
