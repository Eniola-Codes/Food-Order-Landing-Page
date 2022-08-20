import React from "react";
import HeroSection from "./HeroSection";
import HeroTwoSection from "./HeroTwoSection";
import HeroThreeSection from "./HeroThreeSection";
import HeroFourSection from "./HeroFourSection";

const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <HeroSection />
      <HeroTwoSection />
      <HeroThreeSection />
      <HeroFourSection />
    </main>
  );
  //END
};

export default Sections;
