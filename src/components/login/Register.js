import * as React from 'react';
import {Component} from "react";

import './Login.css';
import {Link} from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="login-row">
                    <div className="login-colm-form">
                        <div className="form-container">
                            <input type="text" placeholder="Username"/>
                            <input type="text" placeholder="Email"/>
                            <input type="password" placeholder="Пароль"/>
                            <button className="btn-login">Регистрация</button>
                            <a href="#">Забыли пароль?</a>

                            <p>Уже есть аккаунт?</p>
                            <Link to="/login">
                                <button className="btn-new">Войти</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}