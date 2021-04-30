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
        console.log(formData);
        console.log('submitting');
        // axios.post(`http://localhost/8000/signup`, {
        //     role: user.role,
        //     name: onSubmit.name,
        //     surname: onSubmit.surname,
        //     pesel: onSubmit.pesel,
        //     password: onSubmit.password,
        //     confirmPassword: onSubmit.confirmPassword,
        //     address: onSubmit.address,
        //     dateOfBirth: onSubmit.dateOfBirth,
        //     class: onSubmit.class,
        //     childrenPesel: onSubmit.childrenPesel,
        //     subjects: onSubmit.subjects
        // }).then(function (response) {
        //     console.log(response);
        // });
    };
    let tmp = ['biologia', 'chemia', 'fizyka', 'geografia', 'matemaytka', 'angielski', 'japoński', 'biologia', 'chemia', 'fizyka', 'geografia', 'matemaytka', 'angielski', 'japoński'];
    let tmp2 = ['pierwsza', 'druga', 'trzecia', 'czwarta', 'piąta', 'szósta', 'siódma', 'ósma'];
    useEffect(() => {
        setUser({role: 'pupil'});
        //     let tmpSubjects = [];
        //     axios.get('url to get subjects')
        //         .then(response => {
        //             response.forEach(s => {
        //                 tmpSubjects.push(s);
        //             })
        //         })
        //     setSubjects(tmpSubjects);

        //     let tmpClasses = [];
        //     axios.get('url to get classes')
        //         .then(response => {
        //             response.forEach(c => {
        //                 tmpClasses.push(c);
        //             })
        //         })
        //     setClasses(tmpClasses);

    },[])


    const handleSelectTeacher = (e) => {
        e.preventDefault();
        setUser({role: 'teacher'});
    }

    const handleSelectParent = (e) => {
        e.preventDefault();
        setUser({role: 'parent'});
    }

    const handleSelectPupil = (e) => {
        e.preventDefault();
        setUser({role: 'pupil'});
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
                        (user.role === "pupil") ?
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
                        (user.role === "teacher") ?
                            <>
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
                        (user.role === "parent") ?
                            <>
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
