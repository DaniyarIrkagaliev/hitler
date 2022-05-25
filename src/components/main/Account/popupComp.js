import React from "react";
import './popup.css'
import {Link} from "react-router-dom";


const Popup = props => {

    const {photo, name} = props.data;
    return (


        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="row col-sm-5">
                    <img className='profile-logo-prew' src={photo} alt="conversation"/>
                </div>
                <div className="row col-sm-5">
                    <h3>{name}</h3>
                    <ul>
                        <li>
                            <Link to="/profile"> Мой профиль</Link>
                        </li>
                        <li>
                            <Link to="/home"> Настройки</Link>
                        </li>
                        <li>
                            <Link to="/home"> Выйти</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Popup;