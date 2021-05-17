import React from 'react'
import Day from './Day'


const HeaderDays = () => {
    return (
        <div className='callendar-header-days'>
            {/* TODO use date range from Date */}
        <Day column={2} dayName='Mon' monthNum={4} dayNum={5} />
        <Day column={3} dayName='Tue' monthNum={4} dayNum={6} />
        <Day column={4} dayName='Wed' monthNum={4} dayNum={7} />
        <Day column={5} dayName='Thu' monthNum={4} dayNum={8} />
        <Day column={6} dayName='Fri' monthNum={4} dayNum={9} />
        <Day column={7} dayName='Sat' monthNum={4} dayNum={10}/>
        <Day column={8} dayName='Sun' monthNum={4} dayNum={11}/>

    </div>
    )
}

export default HeaderDays
