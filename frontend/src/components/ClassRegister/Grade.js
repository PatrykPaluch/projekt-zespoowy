import React from 'react';
import './Grade.css'
import swal from 'sweetalert';

const Grade = (props) => {

    let f = (e) => {
        e.preventDefault();
        if (props.grade.length === 5) {
            swal({
                text: `ocena wystawiona: ${props.date}\n nauczyciel wystawiający: ${props.teacher}\nprzedmiot: ${props.subject}\nza co: ${props.description}\nocena: ${props.grade}`
            });
        } else {
            swal({
                text: `ocena wystawiona: ${props.date}\n nauczyciel wystawiający: ${props.teacher}\nprzedmiot: ${props.subject}\nza co: ${props.description}\nocena: ${props.grade}`
            });
        }

    }

    function isOne(grade) {
        return grade > 1 ? grade + ', ' : <span style={{color: 'red'}}> {grade},  </span>;
    }

    return (
        <div className="grade-content" onClick={f}>
            {isOne(props.grade[0])}
        </div>
    );
};

export default Grade;
