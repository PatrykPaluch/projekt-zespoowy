import './styles.css';
import React from 'react'

const Timetable =  (props) =>{
    return (
        <div className='timetable-container'>
            <p>{props.date}
                <br></br>
                {props.day}
            </p>
            <div className='timetable'>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Timetable;
