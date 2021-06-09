import React, {useState, useEffect} from 'react';
import ProfileNav from '../../components/ProfileNav';
import Navbar from "../../components/Navbar";
import './Profile.css';
import {Api} from "../../apiHandler/apiHandler";
import Teacher from "./Teacher";

function Teachers() {
    const [user,setUser] = useState({
        id: '',
        role: ''
    });
    const [teacher,setTeacher] = useState({
        teachers: [],
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

    function getTeachers(id) {
        Api.getStudentTeachers(id).then(response => {
            if (response.status === 200) {
                setTeacher({teachers: response.data.teachers});
            }
            console.log(teacher.teachers);
        });
    }

    function getTeacherSubject(id) {
        let teacherSubject;
        Api.getTeacherSubject(id.key).then(response => {
            if (response.status === 200) {
                teacherSubject = response.data.teacherSubjects[0].subject.name;
                console.log(teacherSubject);
            }
        });
        return(<h3>dupa{teacherSubject}</h3>);
    }

    useEffect(() =>{
        getUser();
        if(user.id!=='' && user.role ===1){
            getTeachers(user.id);
        }
        //getTeachers(user.id);
    }, [user.role, user.id]);

    return (
       <>
        <Navbar/>
        <ProfileNav/>
        <div className="Teachers">
        {teacher.teachers.map((teacher)=> (
            <Teacher
                id={teacher.id}
                name={teacher.name}
                surname={teacher.surname}
            />
        ))}
        </div>
       </>
    )
}

export default Teachers;