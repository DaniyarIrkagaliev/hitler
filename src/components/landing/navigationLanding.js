import "./style.css"

import {Link} from "react-router-dom";
export const NavigationLanding = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand page-scroll' href='#page-top'>
                        Secret Hitler
                    </a>
                </div>

                <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#portfolio' className='page-scroll'>
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='page-scroll'>
                                О проекте
                            </a>
                        </li>
                        <li>
                            <a href='#features' className='page-scroll'>
                                Стек
                            </a>
                        </li>
                        <li>
                            <a href='#team' className='page-scroll'>
                                Команда
                            </a>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
