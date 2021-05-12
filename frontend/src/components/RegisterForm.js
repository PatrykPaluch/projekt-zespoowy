import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
// import Select from 'react-select';
import './RegisterForm.css';
import logo from '../image/LogoGreen.png';
import axios from "axios";

const RegisterForm = () => {

    const {register, handleSubmit} = useForm();
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);

    const [user, setUser] = useState({
        role: '',
    });

    const onSubmit = formData => {
        axios.post(`http://localhost:8080/api/auth/signup`, {
            idRole: user.role,
            name: formData.name,
            surname: formData.surname,
            password: formData.password,
            pesel: formData.pesel,
            address: formData.address,
            //phone: formData.phone,

            // dateOfBirth: onSubmit.dateOfBirth,
            // class: onSubmit.class,
            // childrenPesel: onSubmit.childrenPesel,
            // subjects: onSubmit.subjects
        }).then(function (response) {
            console.log(response);
        });
    };

    let tmp = ['biologia', 'chemia', 'fizyka', 'geografia', 'matemaytka', 'angielski', 'japoński', 'biologia', 'chemia', 'fizyka', 'geografia', 'matemaytka', 'angielski', 'japoński'];
    let tmp2 = ['pierwsza', 'druga', 'trzecia', 'czwarta', 'piąta', 'szósta', 'siódma', 'ósma'];

    const handleSelectPupil = (e) => {
        e.preventDefault();
        setUser({role: 1});
    }

    const handleSelectTeacher = (e) => {
        e.preventDefault();
        setUser({role: 2});
    }

    const handleSelectParent = (e) => {
        e.preventDefault();
        setUser({role: 3});
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
                        <button className="btn-choose" onClick={handleSelectPupil}>Uczeń</button>
                        <button className="btn-choose" onClick={handleSelectTeacher}>Nauczyciel</button>
                        <button className="btn-choose" onClick={handleSelectParent}>Rodzic</button>
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
                        {...register("confirmedPassword")}
                    />
                    <text>Adres</text>
                    <input
                        {...register("address")}
                    />
                    <text>Data urodzenia</text>
                    <input
                        type="date"
                        {...register("dateOfBirth")}
                    />
                    {
                        (user.role === 1) ?
                            <>
                                <text>Klasa</text>
                                <select
                                    {...register("class")}>
                                    {tmp2.map((c, key) => {
                                        return <option value={c} key={key}>{c}</option>
                                    })}
                                </select>
                            </> : null
                    }
                    {
                        (user.role === 2) ?
                            <>
                                <text type>Numer Telefonu</text>
                                <input
                                    {...register("phone")}
                                />
                                <text type>Przedmioty - By wybrac wiecej niz jeden przedmiot wcisnij Ctrl</text>
                                <select className="subjects" multiple
                                        {...register("subjects")}>
                                    {tmp.map((subject, key) => {
                                        return <option value={subject} key={key}>{subject}</option>
                                    })}
                                </select>
                            </> : null
                    }
                    {
                        (user.role === 3) ?
                            <>
                                <text type>Numer Telefonu</text>
                                <input
                                    {...register("phone")}
                                />
                                <text>Pesel dziecka</text>
                                <input
                                    type="number"
                                    {...register("childrenPesel")}>
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
