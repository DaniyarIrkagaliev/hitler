import React from 'react';
import JsonProfile from "../../../data/testUserData.json";
import {Navigation} from "../../main/Navigation";
import "./game.css"

import liberalTrack from "../../../public/track/liberaltrack.png"
import fascistTrack from "../../../public/track/fascisttrack.png"
import fascistArt from "../../../public/card/article/fascistArt.png"
import liberalArt from "../../../public/card/article/liberalArt.png"
import secretArt from "../../../public/card/article/SecretArticle.png"
import playerPlaceholder from "../../../public/players/player.png"
import JsonLobby from "../../../data/testLobby.json"

const Game = () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
        " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
        " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
        " sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const players = [
        {id: 1, player: "Kazakh"},
        {id: 2, player: "Pl1nxe"},
        {id: 3, player: "BAlexD02"},
        {id: 4, player: "Pazik98"},
        {id: 5, player: "player5"},
        {id: 6, player: "player6"},
        {id: 7, player: "player7"},
        {id: 8, player: "player8"},
        {id: 9, player: "player9"},
        {id: 10, player: "player10"}
    ];

    return (

        <div>
            {JsonProfile.map(profile =>
                <Navigation
                    key={profile.id}
                    data={profile}/>)}

            <div className="game-box">
                <div className='container cont1'>
                    <div className="track">
                        <div>
                            <img src={liberalTrack} />
                        </div>
                        <div>
                            <img src={fascistTrack} />
                        </div>
                    </div>

                    <div className="game-logs">
                        <ul>
                            <li>>   {lorem}</li>
                            <li>>   {lorem}</li>
                            <li>>   {lorem}</li>
                        </ul>
                    </div>

                    <div className="articles">
                        <img src={secretArt} className="article"/>
                        <img src={secretArt} className="article"/>
                    </div>
                </div>

                <div className="container cont1">

                    <div className="players">
                        {players.map(item =>
                            <div className="player" key={item.id}>
                                <p>{item.player}</p>
                                <img src={playerPlaceholder}/>
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Game;