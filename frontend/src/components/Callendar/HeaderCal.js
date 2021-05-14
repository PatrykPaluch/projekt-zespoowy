import React from 'react'
import './callendar.css';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const HeaderCal = (props) => {

    let getDateRange = ()=>{
        let from =new Date();

        let tmp = from.getDate() -  from.getDay() + (from.getDay() === 0 ? -6:1);
        from.setDate(tmp);
        let till = new Date();
        till.setDate(from.getDate()+6);
        let fromMonth = from.toLocaleString('default', { month: 'long' })
        let tillMonth = till.toLocaleString('default', { month: 'long' });

        return from.getDate()+' '+(fromMonth == tillMonth ? '':fromMonth)+' - '+
        till.getDate()+' '+tillMonth;
}
    return (
        <div className='header-cal'>
            <h5>{getDateRange()}</h5>
    </div>
    )
}

export default HeaderCal
