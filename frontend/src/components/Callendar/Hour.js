import React from 'react'

const Hour = (props) => {
    return (
        <div className='hour' style={{gridRowStart: props.row}}>
            {props.hour}
        </div>
    )
}

export default Hour
