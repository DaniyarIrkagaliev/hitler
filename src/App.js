import { useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import JsonData from "./data/landing-data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import LandingMain from "./components/LandingMain";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Home from "./components/HomePage";
import {Rules} from "./components/main/Rules/Rules";
import AboutGame from "./components/main/aboutGame/AboutGame";
import Profile from "./components/main/Account/Profile";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingMain/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/rules" element={<Rules/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<AboutGame/>}/>

                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default App;
