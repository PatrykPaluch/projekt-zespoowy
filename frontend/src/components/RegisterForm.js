import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './RegisterForm.css';
import logo from '../image/LogoGreen.png';

const RegisterForm = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = formData => console.log(formData);

    const [isTeacher, setIsTeacher] = useState(true);
    const [isParent, setIsParent] = useState(false);
    const [isPupil, setIsPupil] = useState(false);

    const handleSelectTeacher = () => {
        setIsTeacher(true);
        setIsParent(false);
        setIsPupil(false);
    }

    const handleSelectParent = () => {
        setIsTeacher(false);
        setIsParent(true);
        setIsPupil(false);
    }

    const handleSelectPupil = () => {
        setIsTeacher(false);
        setIsParent(false);
        setIsPupil(true);
    }

    return (
        <div className="App-log">
            <div className="Register">
                <div className="Logo-place-register">
                    <img className="Logo" src={logo} alt={"this is logo"}/>
                </div>
                <form className="Register-form" onSubmit={handleSubmit(onSubmit)}>
                    <text>Rola</text>
                    <div className={'choose'}>
                        <div className="btn-choose" onClick={handleSelectPupil}>uczen</div>
                        <div className="btn-choose" onClick={handleSelectTeacher}>nauczyciel</div>
                        <div className="btn-choose" onClick={handleSelectParent}>rodzic</div>
                    </div>
                    <text>Imię</text>
                    <input
                        {...register("name")}
                    />
                    <text>Nazwisko</text>
                    <input
                        {...register("surname")}
                    />
                    <text>Pesel</text>
                    <input
                        {...register("pesel")}
                    />
                    <text>Hasło</text>
                    <input
                        type="password"
                        {...register("password")}
                    />
                    <text>Powtórz hasło</text>
                    <input
                        type="password"
                        {...register("confirmed-password")}
                    />
                    <text>Adres</text>
                    <input
                        {...register("address")}
                    />
                    <text>Data urodzenia</text>
                    <input
                        type="date"
                        {...register("date-of-birth")}
                    />
                    {
                        isPupil ?
                            <>
                                <text>Klasa</text>
                                <select
                                    {...register("class")}>
                                    <option value="first">pierwsza</option>
                                    <option value="second">druga</option>
                                    <option value="third">trzecia</option>
                                    <option value="fourth">czwarta</option>
                                    <option value="fifth">piata</option>
                                    <option value="sixth">szósta</option>
                                    <option value="seventh">siódma</option>
                                    <option value="eighth">ósma</option>
                                </select>
                            </> : null
                    }
                    {
                        isTeacher ?
                            <>
                                <text type>Przedmioty</text>
                                <select
                                    {...register("subjects")}>
                                    <option value="english">język angielski</option>
                                    <option value="polish">język polski</option>
                                    <option value="maths">matematyka</option>
                                </select>
                            </> : null
                    }
                    {
                        isParent ?
                            <>
                                <text>Pesel dziecka</text>
                                <input
                                    type="number"
                                    {...register("children-pesel")}>
                                </input>
                            </> : null
                    }
                    <button className="Register-button" type="submit">Zarejestruj się</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
