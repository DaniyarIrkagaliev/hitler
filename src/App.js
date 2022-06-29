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
import PrivateRoute from "./components/customRoutes/PrivateRoute";
import Lobbies from "./components/game/GameLobby/Lobbies";
import Game from "./components/game/GameRoom/Game";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingMain/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>


                <Route path="/home" element={
                    <Home/>}/>
                <Route path="/rules" element={
                    <RulePage/>}/>
                <Route path="/about" element={
                    <AboutGame/>}/>
                <Route path="/profile" element={
                    <Profile/>}/>

                <Route path="/lobbies" element={
                    <Lobbies/>}/>

                <Route path="/game" element={
                    <Game/>}/>

            </Routes>
        </div>
    );

    // return auth.isLoaded ?(
    //     <div>
    //         <Routes>
    //             <Route path="/" element={<LandingMain/>}/>
    //             <Route path="/login" element={<Login/>}/>
    //             <Route path="/register" element={<Register/>}/>
    //
    //
    //
    //             <Route path="/home" element={<PrivateRoute>
    //                 <Home/></PrivateRoute>}/>
    //             <Route path="/rules" element={<PrivateRoute>
    //                 <RulePage/></PrivateRoute>}/>
    //             <Route path="/about" element={<PrivateRoute>
    //                 <AboutGame/></PrivateRoute>}/>
    //             <Route path="/profile" element={<PrivateRoute >
    //                 <Profile/></PrivateRoute>}/>
    //
    //         </Routes>
    //     </div>
    // ): (
    //     <div className="body">
    //         <h1>Загрузка</h1>
    //     </div>
    // )
};

export default App;
