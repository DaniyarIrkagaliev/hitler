import {Navigation} from "../Navigation";
import ProfComp from "./profComp";
import {Footer} from "../../footer/Footer";
import {useEffect, useState} from 'react';
import JsonData from "../../../data/landing-data.json";
import JsonProfile from "../../../data/testUserData.json";

export const Profile = (props) => {
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
            <ProfComp/>

            <Footer data={landingPageData.Contact} />
        </div>
    );
};

export default Profile;