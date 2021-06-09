import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import { Api } from '../../apiHandler/apiHandler';

const Child = (props) => {
    const [studentClass,setStudentClass] = useState('');

    function getStudent () {
        Api.getStudent(props.id).then(response => {
            if(response.status === 200){
                setStudentClass(response.data.class.name)
                console.log(response.data.class)
            }
        });
    }

    useEffect(() =>{
        getStudent();
    }, []);

    return (
        <div className="User-data">
            <div className="Data">
                <div className="Data-item">
                    <h4>Imię</h4>
                    <h3>{props.name} </h3>
                </div>
                <div className="Data-item">
                    <h4>Nazwisko</h4>
                    <h3>{props.surname}</h3>
                </div>
                <div className="Data-item">
                    <h4>Pesel</h4>
                    <h3>{props.pesel}</h3>
                </div>
                <div className="Data-item">
                    <h4>Data urodzenia</h4>
                    <h3>{props.birthDate}</h3>
                </div>
                <div className="Data-item">
                    <h4>Klasa</h4>
                    <h3>{studentClass}</h3>
                </div>
            </div>
        </div>
    )
}

export default Child;