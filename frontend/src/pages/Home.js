import React from 'react';
import '../components/styles.css';
import Announcements from '../components/Announcements';
import Timetables from '../components/Timetables';
import Squares from '../components/Squares';

function Home() {
    return (
        <div className='content'>
            <Announcements/>
            <Squares/>
            <Timetables />
        </div>
    )
}

export default Home;