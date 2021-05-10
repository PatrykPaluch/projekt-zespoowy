import React, {useState} from 'react';
import './RegisterForm.css';
import logo from '../image/LogoGreen.png';
import {useForm} from "react-hook-form";

function LoginForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = formData => {
        console.log(formData);
        // axios.post(`http://localhost/8000/signin`, {
        //     role: user.role,
        //     name: onSubmit.name,
        // }).then(function (response) {
        //     console.log(response);
        // });
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
