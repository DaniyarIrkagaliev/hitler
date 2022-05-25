import * as React from 'react';
import {Component} from "react";

import './Login.css';
import '../../index.css';
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
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
}