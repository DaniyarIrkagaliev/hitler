import React from 'react';
import "./newLobby.css"
import Slider from "./utils/slider";

const CreateLobby = props =>  {
    return (
        <div className="action_menu-box" >

            <div className="action_menu ">
                <div>

                    <div onClick={props.handleClose} className="closer">
                        <span>X</span>
                    </div>

                    <h2>Create game</h2>
                    <ul>
                        <li>
                            <div className="game-input">
                                <input  placeholder="New Game"/>
                            </div>
                        </li>

                        <li>
                            <div className="switchToggle">
                                <p>Private</p>
                                <input type="checkbox" id="switch"/>

                                <label htmlFor="switch">Private</label>
                            </div>
                        </li>
                        <li>
                            <Slider/>
                        </li>
                    </ul>

                    <button>Create Game</button>
                </div>
            </div>
        </div>
    );
};

export default CreateLobby;