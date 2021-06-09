import React, {useState, useEffect} from 'react';
import './Profile.css';
import {Api} from "../../apiHandler/apiHandler";

const Teacher = (props) => {
    const [subject,setSubject] = useState('');

    function getTeacherSubject() {
        Api.getTeacherSubject(props.id).then(response => {
            if (response.status === 200) {
                setSubject(response.data.teacherSubjects[0].subject.name);
                console.log(response.data.teacherSubjects[0].subject.name);
            }
        });

    }

    useEffect(() =>{
        getTeacherSubject();
    }, []);

    return (
        <div className="User-data">
            <div className="Data">
                <div className="Data-item">
                    <h4>Przedmiot</h4>
                    <h3>{subject}</h3>
                </div>
                <div className="Data-item">
                    <h4>Imię</h4>
                    <h3>{props.name} </h3>
                </div>
                <div className="Data-item">
                    <h4>Nazwisko</h4>
                    <h3>{props.surname} </h3>
                </div>
            </div>
        </div>


    )
}

export default Teacher;