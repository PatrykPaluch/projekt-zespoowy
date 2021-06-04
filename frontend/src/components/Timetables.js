import './styles.css';
import React, {useEffect, useState} from 'react'
import {Api} from "../apiHandler/apiHandler";
import Timetable from "./Timetable";

function Callendar  (props) {
    const [user,setUser] = useState({
        id: '',
        role: ''
    });

    const [studentClass, setStudentClass] = useState({
        class: ''
    });

    const [timetable,setTimetable] = useState({
        timetables: []
    });

    function getStudentClass (id) {
        Api.getStudent(id).then(response => {
            if(response.status === 200){
                setStudentClass({
                    class: response.data.studentClass.name
                })
            }
        })
    }

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                    role: response.data.role
                })
            }
        })
    }

    function getAnnoucements() {
        Api.getClassAnnoucements().then(response => {
            if(response.status === 200){
                setTimetable({timetables:response.data.list});
            }
        })
    }

    useEffect(() =>{
        getUser();
        if(user.id !=='' && user.role ===1){
            getStudentClass(user.id);
        }
        getAnnoucements();
    }, [])

    return (
        <div className='timetables'>
            <div className='title'>
                Terminarz
            </div>
            {timetable.timetables.map((timetable) =>{
                console.log(timetable)
                return (<Timetable
                    key={timetable.id}
                    /*title={'Biologia: Sprawdzian'}
                    day={'Friday'}
                    date={'02.03'}*/
                    title={timetable.title}
                    day={'Friday'}
                    date={timetable.additional.date}
                />)
            })}
        </div>
    )
}

export default Callendar
