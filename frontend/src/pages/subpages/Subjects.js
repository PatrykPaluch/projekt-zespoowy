import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import axios from "axios";
import {Api} from "../../apiHandler/apiHandler";

function Subjects() {
    const [user,setUser] = useState({
        id: '',
        role: ''
    });

    const [subjects, setSubjects] = useState({
        subjects: []
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                    role: response.data.role.id
                })
            }
        })
    }
    
    function getSubjects(id) {
        Api.getTeacherSubject(id).then(response => {
            if (response.status === 200) {
                setSubjects({subjects:response.data.teacherSubjects});
            }
        });
    }

    /*function getSubjects() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response =>{
            setSubjects({subjects:response.data});
            console.log(subjects);
        });
    }*/

    useEffect(() =>{
        getUser();
        if(user.id !=='' && user.role ===2){
            getSubjects(user.id);
        }
    }, [user.role, user.id]);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Subjects">
            {subjects.subjects.map(subject=> (
                <div className="Subject-data">
                    <div key={subject.id} className="Data">
                        <div className="Data-item">
                            <h4>Przedmiot</h4> 
                            <h3>{subject.subject.name}</h3>
                        </div>
                        <div className="Data-item">
                            <h4>Klasy</h4> 
                            <h3>{subject.teacher.name} {subject.teacher.surname}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </>
    )
}

export default Subjects;