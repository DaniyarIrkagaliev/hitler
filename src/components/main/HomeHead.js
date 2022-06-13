import {Link} from "react-router-dom";
import "./styles/HomeHead.css"

export const HomeHeader = (props) => {
    return (
            <div className='header-sh'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2 intro-text'>
                                <li className='btn btn-start '>
                                    <Link  to="/home" >
                                       <h1>ИГРАТЬ</h1>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
