import React from 'react';
import "./lobby.css"
import profICO from '../../../public/card/secretrole.png'
import emptyICO from '../../../public/card/emptyrole.png'
import JsonLobby from "../../../data/testLobbies.json";

const LobbyEntity = (lobby) => {


    return (
        <div>

            {JsonLobby.map(lobby =>
                <li className="list-group-item d-flex justify-content-between align-content-center">

                    <div className="container">
                        <h4>{lobby.lobby_name}</h4>
                        <div className='col-sm-1'>
                            {lobby.type === "public" ?
                                <i className="fa fa-unlock-alt fa-4x"/>
                                :
                                <i className="fa fa-lock fa-4x"/>
                            }
                        </div>
                        <div className="row ">
                            <img src={profICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={profICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={profICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <img src={emptyICO} alt="profile" className="mx-auto" width="45px"/>
                            <span>
                                3/10
                            </span>

                        </div>
                    </div>

                </li>
            )}
        </div>

    );
};

export default LobbyEntity;