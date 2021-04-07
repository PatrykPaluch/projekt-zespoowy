import React from 'react'
import './callendar.css';

const HeaderCal = (props) => {
    return (
        <div className='header-cal'>
            <button>L</button>
            <h5>{props.date}</h5>
            <button>P</button>
    </div>
    )
}

export default HeaderCal
