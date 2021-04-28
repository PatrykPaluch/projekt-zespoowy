import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
// import Select from 'react-select';
import './RegisterForm.css';
import logo from '../image/LogoGreen.png';
import axios from "axios";

const RegisterForm = () => {

    const {register, handleSubmit} = useForm();
    const onSubmit = formData => console.log(formData);

    const [isTeacher, setIsTeacher] = useState(true);
    const [isParent, setIsParent] = useState(false);
    const [isPupil, setIsPupil] = useState(false);

    const [user,setUser] = useState({
        role: '',
    });

    const handleSelectTeacher = () => {
        setIsTeacher(true);
        setIsParent(false);
        setIsPupil(false);
        setUser(user => user.role = "teacher");
    }

    const handleSelectParent = () => {
        setIsTeacher(false);
        setIsParent(true);
        setIsPupil(false);
        setUser(user => user.role = "parent");
    }

    const handleSelectPupil = () => {
        setIsTeacher(false);
        setIsParent(false);
        setIsPupil(true);
        setUser(user => user.role = "pupil");
    }

    useEffect(() =>{
        axios.post(`http://localhost/8000/signup`,{
            role: user.role,
            name: onSubmit.name, 
            surname: onSubmit.surname,
            pesel:  onSubmit.pesel,
            password: onSubmit.password,
            confirmPassword: onSubmit.confirmPassword,
            address: onSubmit.address,
            dateOfBirth: onSubmit.dateOfBirth,
            class: onSubmit.class,
            childrenPesel: onSubmit.childrenPesel,
            subjects: onSubmit.subjects
        }).then(function(response){
            console.log(response);
        });
    });


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
                                <text type>Przedmioty - By wybrac wiecej niz jeden przedmiot wcisnij Ctrl</text>
                                <select className="subjects" multiple
                                    {...register("subjects")}>
                                    <option value="biology">biologia</option>
                                    <option value="chemistry">chemia</option>
                                    <option value="geography">geografia</option>
                                    <option value="history">historia</option>
                                    <option value="computerScience">informatyka</option>
                                    <option value="english">język angielski</option>
                                    <option value="polish">język polski</option>
                                    <option value="maths">matematyka</option>
                                    <option value="music">muzyka</option>
                                    <option value="plasticity">plastyka</option>
                                    <option value="religion">religia</option>
                                    <option value="technique">technika</option>
                                    <option value="physicalEducation">wychowanie fizyczne</option>
                                </select>
                            </> : null
                    }
                    {
                        isParent ?
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
