import React from 'react';
import HeroSection from './HeroSection';
import HeroTwoSection from './HeroTwoSection';
import HeroThreeSection from './HeroThreeSection';
import HeroFourSection from './HeroFourSection';


const Sections = () =>
{

    return(
    <main>
        <HeroSection/>
        <HeroTwoSection/>
        <HeroThreeSection/>
        <HeroFourSection/>
    </main>
    );
}

export default Sections;