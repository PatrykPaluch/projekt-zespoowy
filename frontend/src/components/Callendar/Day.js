import React from 'react'
import './callendar.css';

const Day = (props) => {
    return (
        <div className='day' style={{gridColumnStart:props.column}}>
            {props.dayName +' '+props.dayNum+' / '+props.monthNum}
        </div>
    )
}

export default Day
