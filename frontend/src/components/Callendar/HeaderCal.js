import React from 'react'
import './callendar.css';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const HeaderCal = (props) => {
    return (
        <div className='header-cal'>
            <button><IoIosArrowBack/></button>
            <h5>{props.date}</h5>
            <button><IoIosArrowForward/></button>
    </div>
    )
}

export default HeaderCal
