import * as React from 'react';

import {Link, Navigate} from "react-router-dom";
import './Login.css';
import '../../index.css';
import useAuth from "./utils/useAuth";



function Login() {

    const auth = useAuth();

        return auth.user ? (<Navigate
            to={{
                pathname: "/"
            }}
        />):(
            <div>
                <div className="login-row">
                    <div className="login-colm-form">
                        <div className="form-container">
                            <input type="text" placeholder="Email"/>
                            <input type="password" placeholder="Пароль"/>
                            <button className="btn-login">Войти</button>
                            <a href="#">Забыли пароль?</a>
                            <Link to="/register">
                                <button className="btn-new">Регистрация</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Login;