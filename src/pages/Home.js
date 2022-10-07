import React from "react";
import FeaturesStrip from "../partials/FeaturesStrip";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import TradeSucessSection from "../partials/TradeSucessSection";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <HeroHome />
      <FeaturesStrip />
      <TradeSucessSection />
    </div>
  );
}

export default Home;
