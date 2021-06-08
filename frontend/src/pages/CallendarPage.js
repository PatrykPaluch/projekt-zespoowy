import React, {useEffect, useState} from 'react'
import '../components/Callendar/callendar.css';
import Callendar from '../components/Callendar/Callendar';
import HeaderCal from '../components/Callendar/HeaderCal';
import Navbar from "../components/Navbar";
import {Api} from "../apiHandler/apiHandler";

const CallendarPage = () => {

    const [currentUser,setCurrentUser] = useState({});

    const [classs,setClass] = useState({});
    const [timetable1,setTimetable] = useState({
        timetable:[]
    });

    useEffect(()=>{
        // Api.me().then(response => {
        //     if(response.status === 200){
                // {console.log(response.data)}
                Api.getStudent(33).then(res => {
                    if(res.status===200){
                        setCurrentUser(res.data);
                        console.log(res.data.role.name)
                    }
                })
                // setCurrentUser(response?.data);
        //     }
        // })
    },[]);


    return (
        <>
            <Navbar/>
            <div className='content-cal'>
                {/* {console.log(currentUser)} */}
                <HeaderCal date='5-11 April'/>
                <Callendar
                    id={currentUser?.id}
                    role={currentUser?.role?.id}
                    class={currentUser?.studentClass?.id}
                />
            </div>
        </>
    )
}

export default CallendarPage
