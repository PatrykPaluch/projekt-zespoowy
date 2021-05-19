import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import {Api} from "../../apiHandler/apiHandler";

function Teachers() {
    const [user,setUser] = useState({
        id: ''
    });
    const [teacher,setTeacher] = useState({
        teachers: [],
    });

    /*function getTeachers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setTeachers({teachers:response.data});
            console.log(teachers);
        });
    }*/

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id
                })
            }
        })
    }

    function getTeachers(id) {
        Api.getStudentTeachers(id).then(response => {
            if (response.status === 200) {
                setTeacher({teachers: response.data.class});
            }
        });
    }

    useEffect(() =>{
        getUser();
        console.log(user);
        console.log(user.id);
        if(user.id!==''){
            getTeachers(user.id);
        }
        //getTeachers(user.id);
    }, []);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Teachers">
        {teacher.teachers.map(teacher=> (
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