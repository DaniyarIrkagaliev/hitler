import {Link} from "react-router-dom";
import './styles/Nav.css'
import { useState, useEffect } from "react";
import Popup from "./Account/popupComp";

export const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const {photo, name} = props.data;

    return (
        <nav id='navigate' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <ul>
                        <li>
                            <Link to="/home"> <a className='navbar-brand'>Secret Hitler</a></Link>
                        </li>
                    </ul>
                </div>

                <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <Link to="/login">
                                ИГРАТЬ!
                            </Link>
                        </li>
                        <li>
                            <Link to="/rules" data={props.data}>
                                Правила
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                О проекте
                            </Link>
                        </li>

                        <li onClick={togglePopup}>
                            <Link to>
                                <img className='profile-logo-mini' src={photo} alt="conversation"/>
                        </Link>
                        </li>

                    </ul>
                    {isOpen && <Popup data={props.data} handleClose={togglePopup}/>}
                </div>
            </div>
        </nav>
    )
}
