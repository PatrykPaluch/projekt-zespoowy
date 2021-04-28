import React from 'react';
import './Grade.css'
import swal from 'sweetalert';

const Grade = (props) => {

    let f = (e) => {
        e.preventDefault();
        if (props.grade.length === 5) {
            swal({
                text: `ocena wystawiona: ${props.grade[1]}\n nauczyciel wystawiający: ${props.grade[2]}\nprzedmiot: ${props.grade[4]}\nza co: ${props.grade[3]}\nocena: ${props.grade[0]}`
            });
        } else {
            swal({
                text: `ocena wystawiona: ${props.grade[1]}\n nauczyciel wystawiający: ${props.grade[2]}\nprzedmiot: ${props.subject}\nza co: ${props.grade[3]}\nocena: ${props.grade[0]}`
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
