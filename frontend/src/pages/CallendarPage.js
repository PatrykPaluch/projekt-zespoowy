import React from 'react'
import '../components/Callendar/callendar.css';
import Callendar from '../components/Callendar/Callendar';
import HeaderCal from '../components/Callendar/HeaderCal';
import Navbar from "../components/Navbar";

const CallendarPage = () => {
    return (
        <>
            <Navbar/>
            <div className='content-cal'>
                <HeaderCal date='5-11 April'/>
                <Callendar/>
            </div>
        </>
    )
}

export default CallendarPage
