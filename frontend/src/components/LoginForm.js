import React, {useState} from 'react';
import './RegisterForm.css';
import logo from '../image/LogoGreen.png';
import {useForm} from "react-hook-form";
import axios from "axios";

import { Api } from "../apiHandler/apiHandler"

function LoginForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = formData => {
        console.log(formData);

        const bodyFormData = new FormData();
        bodyFormData.append('login', formData.pesel)
        bodyFormData.append('password', formData.password)

        axios({
            method: "post",
            url: "http://localhost:8080/api/auth/signin",
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
            .then(function (response) {
                if (response.status === 200) {
                    Api.me()
                        .then(response=> {
                            localStorage.setItem('user', response.data)

                        })
                }
                console.log(response)
            })
            .catch(function (response) {
                console.log(response)
            })
    };

    return (
        <div className="App-log">
            <div className="Register">
                <div className="Logo-place-register">
                    <img className="Logo" src={logo} alt={"this is logo"}/>
                </div>
                <form className="Login-form" onSubmit={handleSubmit(onSubmit)}>
                    <text>Pesel</text>
                    <input
                        {...register("pesel")}
                    />
                    <text>Hasło</text>
                    <input
                        {...register("password")}

                    />
                    <button
                        className="Register-button"
                        type="submit"
                    >Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
