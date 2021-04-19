import React from 'react'
import CardCallendar from './CardCallendar';
import HeaderDays from './HeaderDays'
import Hours from './Hours'
import './callendar.css';

const Callendar = () => {
    return (
    <div className='callendar'>
            <HeaderDays/>
            <div className='callendar-inner'>
                <Hours/>
                {/* TODO passing proper value to CardCallendar (id, date, time, school subject) */}
                <CardCallendar column={2} color= 'rgb(255,255,255)' startRow={1} endRow={4}/>
                <CardCallendar column={2} color='#7B84DB' startRow={5} endRow={8}/>
                <CardCallendar column={2} color='#7BC7DB' startRow={9} endRow={12}/>
                <CardCallendar column={2} color='#81DB7B' startRow={13} endRow={16}/>

                <CardCallendar column={3} color='#7BC7DB' startRow={4} endRow={7}/>
                <CardCallendar column={3} color='#81DB7B' startRow={8} endRow={12}/>
                <CardCallendar column={3} color='#DB7B7B' startRow={13} endRow={16}/>

                <CardCallendar column={4} color='#B27BDB' startRow={4} endRow={7}/>
                <CardCallendar column={4} color='#E0E03B' startRow={8} endRow={11}/>

                <CardCallendar column={5} color='#B27BDB' startRow={8} endRow={11} />
                <CardCallendar column={5} color='#E0E03B' startRow={12} endRow={15} />
                <CardCallendar column={5} color='#DB7B7B' startRow={16} endRow={19} />

                <CardCallendar column={6} color='#81DB7B' startRow={2} endRow={5}/>
                <CardCallendar column={6} color='#7BC7DB' startRow={6} endRow={9}/>
                <CardCallendar column={6} color='#DB7B7B' startRow={10} endRow={13}/>
            </div> 
    </div>
        
    )
}

export default Callendar
