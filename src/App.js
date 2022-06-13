
import {Route, Routes} from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import LandingMain from "./components/LandingMain";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Home from "./components/HomePage";
import AboutGame from "./components/main/aboutGame/AboutGame";
import Profile from "./components/main/Account/Profile";
import RulePage from "./components/main/Rules/RulePage";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingMain/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/rules" element={<RulePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<AboutGame/>}/>

                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default App;
