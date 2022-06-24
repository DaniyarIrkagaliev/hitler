import React from 'react';
import {useState, useEffect} from "react";
import JsonData from "../../../data/landing-data.json";
import {Navigation} from "../../main/Navigation";
import JsonProfile from "../../../data/testUserData.json"
import LobbyEntity from "./LobbyEntity";
import CreateLobby from "./createLobby";

const Lobbies = (props) => {


    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {JsonProfile.map(profile =>
                <Navigation
                    key={profile.id}
                    data={profile}/>)}

            <div className="container d-flex justify-content-center">
                <ul className="list-group mt-5 text-white">
                    <div>
                        <button type="button"
                                className="btn btn-secondary btn-lg lob"
                                onClick={togglePopup}
                        >
                            <h5>Создать лобби</h5>
                        </button>
                    </div>

                    <LobbyEntity/>
                </ul>

            </div>

            {isOpen && <CreateLobby data={props.data} handleClose={togglePopup}/>}
            {/*<Footer data={landingPageData.Contact}/>*/}

        </div>
    );
};

export default Lobbies;