import React from 'react'
import CardCallendar from './CardCallendar';
import './callendar.css';

const Callendar = () => {
    return (
    <div className='callendar'>
        <div className='callendar-header-days'>
            dfgdgd
        </div>
            <div className='callendar-inner'>
            <div className='callendar-inner-hours'>
                hhhh
            </div>
                <CardCallendar column={2} color= 'rgb(255,255,255)' startRow={1} endRow={4}/>
                <CardCallendar column={2} color='yellow' startRow={5} endRow={8}/>
                <CardCallendar column={2} color='green' startRow={9} endRow={12}/>
                <CardCallendar column={2} color='gray' startRow={13} endRow={16}/>

                <CardCallendar column={3} color='yellow' startRow={4} endRow={7}/>
                <CardCallendar column={3} color='red' startRow={8} endRow={12}/>
                <CardCallendar column={3} color='green' startRow={13} endRow={16}/>

                <CardCallendar column={3} color='yellow' startRow={4} endRow={7}/>
                <CardCallendar column={4} color='green' startRow={2} endRow={4}/>
                <CardCallendar column={5} color='gray' startRow={1} endRow={4} />
                <CardCallendar column={6} color='violet' startRow={2} endRow={5}/>
                <CardCallendar column={7} color='white' startRow={4} endRow={7}/>
                <CardCallendar column={8} color='blue' startRow={1} endRow={4}/>
            </div> 
    </div>
        
    )
}

export default Callendar
