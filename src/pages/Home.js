import React from "react";
import FeaturesStrip from "../partials/FeaturesStrip";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import HomeHowItWorks from "../partials/HomeHowItWorks";
import TradeSucessSection from "../partials/TradeSucessSection";
import HomePricing from "../partials/HomePricing";
import HomeFAQ from "../partials/HomeFAQ";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      <HeroHome />
      <FeaturesStrip />
      <TradeSucessSection />
      <HomeHowItWorks />
      <HomePricing />
      <HomeFAQ />
      <Footer />
    </div>
  );
}

export default Home;
