import * as React from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom";
import './Login.css';
import '../../index.css';
import {useEffect, useRef, useState} from "react";

import axios from '../../api/axios';
import useAuth from "../../hooks/useAuth";
const LOGIN_URL = '/auth';

function Login() {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const userRef = useRef();
    const errRef = useRef();

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <div>
            <div className="login-row">
                <div className="login-colm-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <input  type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required

                                    placeholder="username"/>
                            <input type="password"
                                   id="password"
                                   onChange={(e) => setPwd(e.target.value)}
                                   value={pwd}
                                   required
                                   placeholder="Пароль"/>
                            <button className="btn-login">Войти</button>
                            {/*<a href="#">Забыли пароль?</a>*/}

                            <Link to="/register">
                                <button className="btn-new" type = "submit">Регистрация</button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;