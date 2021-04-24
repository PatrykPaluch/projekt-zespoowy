import React from 'react'

const CardCallendar = (props) => {
    return (
        <div className='card-callendar' style={{
            gridColumnStart:props.column, backgroundColor: props.color, gridRowStart: props.startRow, gridRowEnd: props.endRow}}>
            <h5>Title</h5>
            <h6>7:30-10:30</h6>
        </div>
    )
}

export default CardCallendar
