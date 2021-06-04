import React from 'react'
import './styles.css';

const Annoucement = (props) => {
    return (
    <div className='announcement'>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.contents}</p>
            </div>
    )
}

export default Annoucement
