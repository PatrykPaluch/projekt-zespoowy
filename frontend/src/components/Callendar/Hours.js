import React from 'react'
import Hour from './Hour'
import './callendar.css';

const Hours = () => {
    return (
        <div className='callendar-inner-hours'>
            <Hour row={1} hour='7:00'/>
            <Hour row={3} hour='7:30'/>
            <Hour row={5} hour='8:00'/>
            <Hour row={7} hour='8:30'/>
            <Hour row={9} hour='9:00'/>
            <Hour row={11} hour='9:30'/>
            <Hour row={13} hour='10:00'/>
            <Hour row={15} hour='10:30'/>
            <Hour row={17} hour='11:00'/>
            <Hour row={19} hour='11:30'/>
            <Hour row={21} hour='12:00'/>
            <Hour row={23} hour='12:30'/>
            <Hour row={25} hour='13:00'/>
            <Hour row={27} hour='13:30'/>
            <Hour row={29} hour='14:00'/>
            <Hour row={31} hour='14:30'/>
            <Hour row={33} hour='15:00'/>
            <Hour row={35} hour='15:30'/>
            <Hour row={37} hour='16:00'/>
            <Hour row={39} hour='16:30'/>
            <Hour row={41} hour='17:00'/>
            <Hour row={43} hour='17:30'/>
            <Hour row={45} hour='18:00'/>
            <Hour row={47} hour='18:30'/>
        </div>
    )
}

export default Hours
