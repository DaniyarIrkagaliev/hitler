
import {Navigation} from "../Navigation";
import {Footer} from "../../footer/Footer";
import JsonData from "../../../data/landing-data.json";
import JsonProfile from "../../../data/testUserData.json"
import { useState, useEffect } from "react";
import Rules from "./Rules";

export const RulePage = (props) => {
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
            <Rules/>
            <Footer data={landingPageData.Contact} />
        </div>
    );
};

export default RulePage;