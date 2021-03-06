import "./aboutGame.css"
import {Navigation} from "../Navigation";
import {License} from "./License";
import {Footer} from "../../footer/Footer";

import JsonData from "../../../data/landing-data.json";
import { useState, useEffect } from "react";
import JsonProfile from "../../../data/testUserData.json";

export const AboutGame = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <div>
            {JsonProfile.map(profile =>
                <Navigation
                    data={profile}
                    key ={profile.id}/>
            )}
            <License/>

            <Footer data={landingPageData.Contact} />
        </div>
    );
};

export default AboutGame;