import {useState, useEffect} from "react";
import JsonData from "../data/landing-data.json";
import {Navigation} from "./main/Navigation";
import {HomeHeader} from "./main/HomeHead";
import JsonProfile from "../data/testUserData.json"
import {Footer} from "./footer/Footer";

export const Home = () => {

        const [landingPageData, setLandingPageData] = useState({});
        useEffect(() => {
            setLandingPageData(JsonData);
        }, []);


        return (
            <div>
                {JsonProfile.map(profile =>
                    <Navigation
                        key={profile.id}
                        data={profile}/>)}

                <HomeHeader data={landingPageData.Header}/>

                <Footer data={landingPageData.Contact}/>
            </div>
        );
    };

export default Home;