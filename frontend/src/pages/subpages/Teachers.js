import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import axios from "axios";

function Teachers() {
    const [teachers,setTeachers] = useState({
        teachers: []
    });

    function getTeachers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setTeachers({teachers:response.data});
            console.log(teachers);
        });
    }

    useEffect(() =>{
        getTeachers();
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Teachers">
        {teachers.teachers.map(teacher=> (
            <div className="User-data">
                <div className="Data">
                    <div className="Data-item">
                        <h4>Przedmiot</h4> 
                        <h3>{teacher.subjectName}</h3>
                    </div>
                    <div className="Data-item">
                        <h4>Imię</h4> 
                        <h3>{teacher.name} </h3>
                    </div>
                    <div className="Data-item">
                        <h4>Nazwisko</h4> 
                        <h3>{teacher.surname} </h3>
                    </div>
                </div>
            </div>
        ))}
        </div>
       </>
    )
}

export default Teachers;