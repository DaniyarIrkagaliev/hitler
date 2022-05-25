import { useState, useEffect } from "react";
import JsonData from "../data/landing-data.json";
import {Navigation} from "./main/Navigation";
import {HomeHeader} from "./main/HomeHead";
import axios from 'axios';

export const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        getConversations()
    }, [])
    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=1').then(response => {
            let newConversations = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }

    return (
        <div>{conversations.map(conversation =>
            <Navigation key={conversation.name}
                        data={conversation}/>)}
            <HomeHeader data={landingPageData.Header} />

        </div>
    );
};

export default Home;