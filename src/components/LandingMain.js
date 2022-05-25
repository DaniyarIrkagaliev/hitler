import { useState, useEffect } from "react";
import JsonData from "../data/landing-data.json";
import {NavigationLanding} from "./landing/navigationLanding";
import {Header} from "./landing/header";
import {Gallery} from "./landing/gallery";
import {About} from "./landing/about";
import {Features} from "./landing/features";
import {Team} from "./landing/team";
import {Footer} from "./footer/Footer";

import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

export const LandingMain = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <NavigationLanding />
            <Header data={landingPageData.Header} />
            {/*<Services data={landingPageData.Services} />*/}
            <Gallery data={landingPageData.Gallery}/>
            <About data={landingPageData.About} />
            <Features data={landingPageData.Features} />
            <Team data={landingPageData.Team} />
            <Footer data={landingPageData.Contact} />
        </div>
    );
};

export default LandingMain;