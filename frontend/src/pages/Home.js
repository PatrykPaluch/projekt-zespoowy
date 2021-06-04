import React, {useEffect, useState} from 'react';
import '../components/styles.css';
import Announcements from '../components/Announcements';
import Timetables from '../components/Timetables';
import Squares from '../components/Squares';
import Navbar from '../components/Navbar';
import {Api} from "../apiHandler/apiHandler";
function Home() {
    return (
        <>           
            <Navbar/>
            <div className='content'>
                <Announcements/>
                <Squares/>
                <Timetables />
            </div>
        </>
    )
}

export default Home;