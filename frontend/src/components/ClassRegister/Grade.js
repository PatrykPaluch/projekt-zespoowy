import React from 'react';
import './Grade.css'
import swal from 'sweetalert';

const Grade = (props) => {

    let f = (e) => {
        e.preventDefault();
        swal({
            text: `ocena wystawiona:data\n nauczyciel wystawiający:Mariusz Walczyk\nocena: ${props.grade}`
        });

    }

    function isOne(grade) {
        return grade > 1 ? grade + ', ' : <span style={{color: 'red'}}> {grade},  </span>;
    }

    return (
        <div className="grade-content" onClick={f}>
            {isOne(props.grade)}
        </div>
    );
};

export default Grade;
